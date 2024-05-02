const CustomerMsg = require("../Collections/CustomerMsg");

module.exports.addMsg = async (req,res)=>{
    try {
        const name = req.body.Name;
        const email = req.body.Email;
        const sub = req.body.Subject;
        const msg = req.body.Message;

        const m = await new CustomerMsg({Name:name, Email: email, Subject: sub, Message: msg});
        await m.save();
        res.send({code : 200, data: m});
        
    } catch (error) {
        res.status(500).json({"ERROR":"Internal server error "+error});
    }
}