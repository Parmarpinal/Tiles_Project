const Product = require("../Collections/Product");

module.exports.addProduct = async (req,res)=>{
    try {
        const name = req.body.Name;
        const width = req.body.Width;
        const height = req.body.Height;
        const thickness = req.body.Thickness;
        const img = req.body.Img;
        const color = req.body.Color;
        const qnt = req.body.QuantityPerBox;
        const type = req.body.Type;
        const laying = req.body.LayingType;
        const price = req.body.Price;
        const catId = req.body.CategoryId;

        const pro = await new Product({Name:name, Width: width, Height: height, Thickness: thickness,
             Img: img, Color: color, QuantityPerBox: qnt, Type: type, LayingType: laying, Price: price, CategoryId: catId});
        await pro.save();
        res.send(pro);
        
    } catch (error) {
        res.status(500).json({"ERROR":"Internal server error "+error});
    }
}