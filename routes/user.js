const express = require("express")
const user_route = express();
const path = require('path');
const session = require("express-session");
const nocache = require("nocache");



const userController = require("../api/services/user-controllers");
const profilecontrollers = require('../api/services/profile-controllers')


const userAuth = require('../middleware/userauth');

user_route.get('/sample',userController.sample)
user_route.get('/',userController.home)
//signup route
user_route.get('/signup',userController.signup)
user_route.post('/signup',userController.signup_post)
user_route.post('/otp-signupValidation',userController.signup_Otpvalidation)


//login route
user_route.get('/login',userController.login)
user_route.post('/login',userController.login_post)
 user_route.post('/otp-loginValidation',userController.login_OTPValidation)
// user_route.post('/login-validation',userController.login_OTPValidation)

// forgot password

user_route.get('/forgotPassword',userController.forGotPassword)
user_route.post('/numberValidation',userController.numberValidation)
user_route.post('/newPassword',userController.newPassword)
user_route.post('/resetPassword',userController.resetPassword)

//logout
user_route.get('/logout',userController.signout)


//shop
user_route.get('/shop',userController.shop)
user_route.get('/category/:id',userController.category)

// successtic
user_route.get('/success',userController.successTick)

//product view 
user_route.get('/product-view/:id',userController.productView)

//product search
user_route.post('/search',userController.search_product)

// Add to cart 
user_route.get('/cart',userAuth.userChecking,userAuth.isblock,userController.loadcart)
user_route.post('/cart/:id',userAuth.userChecking,userAuth.isblock,userController.Addcart)
user_route.post('/cart/quantityUpdate/:itemId', userController.cartQuantityUpdate); 
user_route.post('/cartDelete/:id', userController.cartDelete);


//wishlist
user_route.get('/wishlist',userController.WhishListLoad)
user_route.post('/wishlist/:id',userController.addingWhishList)
user_route.get('/wishlist/:id',userController.WhishProductDelete)
user_route.post('/wishlist/:id',userController.addingWhishListtoCart)


// checkout
user_route.get('/CheckOutPage',userController.Checkout)
user_route.post('/AddressUpdate',userController.addressAdding)
user_route.post('/CheckOut',userController.orderSuccess)
user_route.post('/saveOrderData',userController.savingData)

user_route.get('/profile',profilecontrollers.profile)
user_route.get('/profile/order',profilecontrollers.order)
user_route.post('/profile/order/:id',profilecontrollers.orderCancel)
user_route.post('/profile/orderStatus/:id',profilecontrollers.orderStatus)
user_route.get('/profile/orderView',profilecontrollers.orderView)
user_route.get('/profile/address',profilecontrollers.profileAddress)
user_route.post('/profile/address/editAddress',profilecontrollers.editAddress)
user_route.post('/profile/address/updateAddress',profilecontrollers.updateaddress)
user_route.post('/profileUpdate',profilecontrollers.profileUpdate)


module.exports = user_route


