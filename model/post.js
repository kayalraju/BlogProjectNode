const express=require('express')
const mongoose=require('mongoose')

const Schema=mongoose.Schema

const PostSchema=new Schema({
    title:{
        type:String,
        required:[true,'title is required'],
    },
    subtitle:{
        type:String,
        required:[true,'title is required'],
    },
    post:{
        type:String,
        required:[true,'title is required'],
    },
    image:{
        type:String,
        required:[true, 'image is required'],
    },
    status:{
        type:Boolean,
        required:true,
        default:false,
    },
    slug:{
        type:String,
        unique:true,
        required:true,
    },
    posted_at:{
        type:Date,
        required:true,
        default:Date.now
    }
});

const PostModel= new mongoose.model('post',PostSchema);
module.exports=PostModel;
