const express=require('express')
const Route=express.Router()
const HomeController=require('../controller/HomeController')

Route.get('/',HomeController.index)
Route.get('/about',HomeController.about)
Route.get('/post',HomeController.post)

Route.post('/add_post',HomeController.addpost);


Route.get('/contact',HomeController.contact)
Route.get('/register',HomeController.register)
Route.get('/login',HomeController.login)
//Route.post('/contactpost',HomeController.contact1)




module.exports=Route