const Category = require("../Collections/Category");

module.exports.addCategory = async (req,res)=>{
    try {
        const name = req.body.CategoryName;

        const cat = await new Category({CategoryName:name});
        await cat.save();
        res.send(cat);
        
    } catch (error) {
        res.status(500).json({"ERROR":"Internal server error "+error});
    }
}