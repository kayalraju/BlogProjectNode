const express=require('express');
const path=require('path');
const PostModel=require('../model/post');

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

exports.addpost=(req,res)=>{
    const image= req.file

    const title = req.body.title.trim()
    const slug = title.replace(/\s+/g, '-').toLowerCase()
    console.log(image)
    const Post= new PostModel({
        title: req.body.title,
        subtitle: req.body.subtitle,
        post: req.body.editor1,
        image: image.path,
        slug: slug
    })
    Post.save().then((result)=>{
        console.log(result,"Post save successfully")
        res.redirect('/')
    }).catch((err)=>{
        console.log(err,"post not saved")
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