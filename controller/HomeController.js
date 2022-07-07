const express=require('express');

exports.index=(req,res)=>{
    res.render('home',{
        title:"home page",
        data:"Raju kayal"
    })
}

exports.about=(req,res)=>{
    res.render('about',{
        title:"about page",
        data:"all student"
    })
}

exports.post=(req,res)=>{
    res.render('post',{
        title:"post page",
        data:"all student"
    })
}
exports.contact=(req,res)=>{
    res.render('contact',{
        title:"contact page",
        data:"all student"
    })
}
exports.register=(req,res)=>{
    res.render('register',{
        title:"reg page",
        data:"all student"
    })
}
exports.login=(req,res)=>{
    res.render('login',{
        title:"login page",
        data:"all student"
    })
}



// exports.contact1=(req,res)=>{
//      console.log(req.body);
    
// }