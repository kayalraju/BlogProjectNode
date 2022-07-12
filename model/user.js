const express=require('express')
const mongoose=require('mongoose')

const schema=mongoose.Schema

const UserSchema=new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})

const UserModel=new mongoose.model('user',UserSchema)
module.exports=UserModel