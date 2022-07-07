const express=require('express')

exports.index=(req,res)=>{
    res.render('admin/dashboard',{
        title:"admin page"
    })
}
exports.test=(req,res)=>{
    res.render('admin/test',{
        title:"test page"
    })
}