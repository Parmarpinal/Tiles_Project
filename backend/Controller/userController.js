const UserModel = require("../Collections/UserModel");
const jwt = require('jsonwebtoken');

module.exports.signup = async (req,res)=>{

    try {
        const name = req.body.Name;
        const password = req.body.Password;
        const email = req.body.Email;
        const type = req.body.Type || 'User';
        const mobile = req.body.MobileNo;
        const add = req.body.Address;

        if(!name){
            return res.send({code: 400, message: 'Name required'});
        }else if(!password){
            return res.send({code: 400, message: 'Password required'});
        }else if(!email){
            return res.send({code: 400, message: 'Email required'});
        }else{
            const newUser = await new UserModel({Name:name, Password:password, Email:email, Type:type,
                                                MobileNo: mobile, Address: add
            });
            await newUser.save();
            res.send({code: 200, message: 'Signed up successfully', data: newUser});
        }
    } catch (error) {
        res.status(500).json({"ERROR":"Internal server error "+error});
    }
}

module.exports.login = async (req,res)=>{
    try{
        const name = req.body.Name;
        const password = req.body.Password;

        if(!name){
            return res.send({code: 400, message: 'Name required'});
        }else if(!password){
            return res.send({code: 400, message: 'Password required'});
        }else{
            const isNameExists = await UserModel.findOne({ Name: name });
            if(isNameExists){

                if(isNameExists.Password == req.body.Password){
                    // const token = jwt.sign({
                    //     expAfter: Math.floor(Date.now() / 1000) + (60 * 60),
                    //     Name: isNameExists.Name,
                    //     Password: isNameExists.Password,
                    //     Type: isNameExists.Type
                    // }, 'MYKEY');
                    return res.send({code: 200, message: 'Login successfully!!!', userId: isNameExists._id});
                }else{
                    return res.send({code: 403, message: 'Password wrong!!!'});
                }
            }else{
                return res.send({code: 404, message: 'Name not found!!!'});
            }
        }
    }catch(error){
        res.status(500).json({"ERROR":"Internal server error "+error});
    }
}