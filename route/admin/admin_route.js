const express=require('express')
const Route=express.Router()
const AdminController=require('../../controller/admin/AdminController')

Route.get('/admin-dashboard',AdminController.index)
Route.get('/test',AdminController.test)



module.exports=Route