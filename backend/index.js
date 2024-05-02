const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Cart = require('./Collections/Cart');
const userController = require('./Controller/userController');
const categoryController = require('./Controller/categoryController');
const productController = require('./Controller/productController');
const cartController = require('./Controller/cartController');
const UserModel = require('./Collections/UserModel');
const Category = require('./Collections/Category');
const Product = require('./Collections/Product');
const CusMsgController = require('./Controller/CusMsgController');
const CustomerMsg = require('./Collections/CustomerMsg');

mongoose
.connect('mongodb+srv://pinalParmar:pinalParmar123@cluster0.y9necpp.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser : true})
.then(()=>{
    console.log('Connected to mongooDB ATLAS');
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));


    // Signup
    app.post('/signup' , userController.signup);
    app.get('/signup',async (req,res)=>{
        const u =  await UserModel.find();
        res.send(u);
    })

    //login
    app.post('/login' , userController.login);

    // add to cart
    app.post('/addToCart', cartController.addCart);
    app.post('/getCart', cartController.getCart);
    app.delete('/deleteCart/:id', cartController.deleteCart);
    app.get('/getAllCustomer', async (req, res)=>{
        const data = await Cart.find().populate("UserId Products.ProductId").exec();
        res.send(data);
    })
    app.post('/deleteItem', cartController.deleteItemInCart);

    //Category
    app.post('/category', categoryController.addCategory);
    app.get('/category',async (req, res)=>{
        const cat = await Category.find();
        res.send(cat);
    })

    //Product
    app.post('/product', productController.addProduct);
    app.get('/product', async (req,res)=>{
        const pro = await Product.find();
        res.send(pro);
    })
    app.delete('/product/:id', async (req, res)=>{
        const data = await Product.findByIdAndDelete(req.params.id);
        res.send(data);
    })
    app.get('/product/:id', async (req, res)=>{
        const data = await Product.findById(req.params.id);
        res.send(data);
    })
    app.put('/product/:id', async (req, res)=>{
        const tile = await Product.findById(req.params.id);
        tile.Name = req.body.Name;
        tile.Width = req.body.Width;
        tile.Height = req.body.Height;
        tile.Thickness = req.body.Thickness;
        tile.Img = req.body.Img;
        tile.Color = req.body.Color;
        tile.Type = req.body.Type;
        tile.QuantityPerBox = req.body.QuantityPerBox;
        tile.LayingType = req.body.LayingType;
        tile.Price = req.body.Price;
        tile.CategoryId = req.body.CategoryId;
        await tile.save();
        res.send(tile);
    })

    // Category wise products
    app.get('/:place', async (req, res) => {    
        const p=req.params.place;
        try {
            const products = await Product.find().populate("CategoryId").exec();
            const newpro = products.filter((tile)=>{
                return tile.CategoryId.CategoryName == p;
            })
            res.json(newpro);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Getting messages of customers
    app.post('/customer/msg', CusMsgController.addMsg);
    app.get('/customer/msg', async (req,res)=>{
        const pro = await CustomerMsg.find();
        res.send(pro);
    })
    app.delete('/customer/msg/:id',async (req,res)=>{
        const msgDeleted = await CustomerMsg.findByIdAndDelete(req.params.id);
        res.send(msgDeleted);
    })
    
    app.listen(3050,()=>{
        console.log('Server started');
        console.log('Running at the 3050 port no');
    })
})

