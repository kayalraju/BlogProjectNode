const express=require('express');
const path=require('path')
const ejs=require('ejs')
const mongoose = require('mongoose');

const app=express();
 app.set('view engine','ejs')
 app.set('views','views')

 app.use(express.urlencoded({
    extended: true
}));

 //create a static folder
 app.use(express.static(path.join(__dirname,'public')))
//define route
const homeRoute=require('./route/home_route')
app.use(homeRoute)
const AdminRoute=require('./route/admin/admin_route')
app.use('/admins',AdminRoute)
//define lprt

const dbDriver="mongodb+srv://blogproject:NORgNxg95KTiXQ9T@cluster0.pigbj.mongodb.net/BlogProject"


const port=process.env.PORT || 2022

mongoose.connect(dbDriver,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(result=>{
    app.listen(port,()=>{
        console.log(`Connection Successful`);
        console.log(`Server running at http://localhost:${port}`);
    })
}).catch(error=>{
    console.log(error);
})