const express=require('express');
const path=require('path')
const ejs=require('ejs')
const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
const cookie=require('cookie-parser');
const jwt=require('jsonwebtoken');
const session=require('express-session');
//stape 1 for fileupload
const multer=require('multer');

const app=express();
 app.set('view engine','ejs')
 app.set('views','views')

 app.use(express.urlencoded({
    extended: true
}));

 //create a static folder
 app.use(express.static(path.join(__dirname,'public')))
 //stape2 fileupload
app.use('/upload',express.static(path.join(__dirname,'upload')));
//stape3
const fileStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'upload')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
//stape4 file type
const fileFilter=(req,file,cb)=>{
    if(file.mimetype.includes("png") ||
    file.mimetype.includes("jpg") ||
    file.mimetype.includes("jpeg")){
        cb(null,true)
    }
    else{
        cb(null,false)
    }    
}
//stape5 file upload
app.use(multer({storage:fileStorage,fileFilter:fileFilter,limits:{fieldSize:1024*1024*5}}).single('image'))

//define route
const homeRoute=require('./route/home_route')
app.use(homeRoute)
const AdminRoute=require('./route/admin/admin_route')
app.use('/admins',AdminRoute)
//define lprt

const dbDriver="mongodb+srv://blogproject:NORgNxg95KTiXQ9T@cluster0.pigbj.mongodb.net/BlogNode"


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