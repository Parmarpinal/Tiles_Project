const Cart = require("../Collections/Cart");

module.exports.addCart = async (req,res)=>{
    try{
        const uId = req.body.UserId;
        const pId = req.body.ProductId;
        const qnt = req.body.Quantity;
        const price = req.body.Price; 

        const isAlreadyExistsUser = await Cart.findOne({UserId : uId});

        if(isAlreadyExistsUser){
            
            await Cart.updateOne({ _id: isAlreadyExistsUser._id},
                {
                    $addToSet : {
                        Products : {
                            ProductId : pId,
                            Quantity : qnt,
                            Price : price
                        }
                    }
                })
            return res.send({code: 200, message: 'Add to cart successfully'});
        }else{
            const cartItem = await new Cart({UserId: uId,Products: {
                ProductId : pId,
                Quantity : qnt,
                Price : price
            }});
            await cartItem.save();
            res.send(cartItem);
        }
        
    }catch (error) {
        res.status(500).json({"ERROR":"Internal server error "+error});
    }
}
    
module.exports.getCart = async (req, res)=>{
    try{
        const userId = req.body.UserId;
        const data = await Cart.findOne({UserId: userId}).populate("Products.ProductId").exec();
        return res.send(data);
    }catch(error){
        res.status(500).json({"ERROR":"Internal server error "+error});
    }
}

module.exports.deleteCart = async (req, res)=>{
    try{
        const userId = req.params.id;
        const data = await Cart.findOne({UserId: userId});
        const response = await Cart.findByIdAndDelete(data._id);
        return res.send(response);
    }catch(error){
        res.status(500).json({"ERROR":"Internal server error "+error});
    }
}

module.exports.deleteItemInCart = async (req, res)=>{
    try{
        const userId = req.body.UserId;
        const productIdToDelete = req.body.IdOfProducts;
        const data = await Cart.findOne({UserId: userId});

        for(var i=0;i<data.Products.length;i++){
            if(data.Products[i]._id == productIdToDelete){
                console.log('index =',i);
                break;
            }
        }

        data.Products.splice(i,1);
        console.log(data);

        await Cart.updateOne({_id : data._id},{
            $set: 
                {Products: data.Products}
        })

        res.status(200).json({"Message":"Updated cart successfully"});
    }catch(error){
        res.status(500).json({"ERROR":"Internal server error "+error});
    }
}