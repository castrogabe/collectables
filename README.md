# MERN Antiquepox eCommerce antique website

. create git repository called antiquepox

# 1st Commit-Antiquepox Layout components and pages (rfce, rfc)

. Create React App
. Add Bootstrap and all css

FRONTEND
.folder: components
Header.js > added
BottomHeader.js > added
Footer.js > added
BottomFooter.js >added

.folder: pages

## rfce:

import React from 'react'
function Home {
Return (

<div>Home Page</div>
)
};
export default Home

## rfc:

import React from 'react'

export default function NewPage() {
return (

<div>NewPage</div>
)
}

Home.js > added
About.js > added
Gallery.js > added

. Create Git Repository

# Second Commit add static data

FRONTEND
.folder: pages
Product.js > added

data.js > added (root)

#### How to Add second commit

from terminal > cd project root

1. git add .
2. git status (shows stages files ready to commit in green)
3. git commit -m "commit message"
4. git status (tells us that everything is committed "working tree clean" on main branch)
5. git push

# Third Commit create backend

Terminal: mkdir backend
cd backend
npm init (enter thru the prompts) creates {}package.json

BACKEND
data.js > added
.gitiginore > added
server.js > added
. create route for api/products
. update and fetch products from backend using axios
. get state from useReducer
. update HomeScreen.js

FRONTEND
.folder: pages
Gallery.js > updated
Home.js > updated
Product.js > updated

# Fourth Commit by Reducer Hook, Helmet, Rating

BACKEND
server.js > update

FRONTEND
folder: components
LoadingBox.js (spinner) > added
MessageBox.js > added
Product.js > added
Rating.js > added

folder: pages
AboutUs.js > updated
Home.js > updated
Product.js > updated
Rating.js > added

. define reducer
. update fetch data, get state from useReducer in Home
. create product and rating components
. Use rating in product component
. Add Helmet to pages and index.js
. Jumbotron with typewriter effect in Home and components add Jumbotron.js
. Create Product details
. Create loading component
. Create message component
. Add React spinner in LoadingBox
. utils.js to define error function
. update server.js in backend

# Fifth Commit, Cart

BACKEND
data.js > updated with id number

FRONTEND
folder: pages
Cart.js > added

App.js > updated
Store.js > added
Product.js > updated

. Add \_id number to products array in data.js
. Create Cart page
. add app.get to server.js to fetch products by \_id
. Update index.js for React 18

# Sixth Commit Signin, Cart pages, JWT, Connect MongoDB

BACKEND
data.js > comment out id number updated
env.example > added
server.js > updated

folder: models
productModel.js > added
userModel.js > added

folder: routes
productRoutes.js > added
seedRoutes.js > added
userRoutes.js > added

utils.js > added

FRONTEND
folder: components
Header.js > updated
Product.js > updated
Rating.js > updated

folder: pages
Cart.js > updated
Product.js > updated
Signin.js > added

App.js > updated
Store.js > updated
data.js > deleted

. Connect to MongoDB using Atlas (create account if you don't have one)
add: JWT_SECRET = your secret word
add: MONGODB_URI = your mongo_db connection
. Update and install all dependencies in {}package.json needed in backend
. Signin to API
. read data.js to database (fix data.js, all lowercase)
. fix components > Product.js in frontend (Line 16)
. fix pages > Product.jd (Line 81)
. Comment out \_id's in data.js (backend)

# Seventh Commit-CSS, Jumbotron

FRONTEND
folder: components
Product.js > updated
Jumbotron.js > added

folder: pages
Home.js > updated Typewriter Effect

. CSS adjustments for Responsive logo in Navbar.Brand
left side use ClassName="me-auto" (Line 22)
CSS realignment by category
. Add toast notification to components > Product.js (Line 29-32)
app.js (Lines 11-12, 20)
. Jumbotron with react-typewriter-effect
add components > Jumbotron.js
add Jumbotron in Home.js (Lines 46-50)

# Eighth Commit-Checkout/OrderHistory

BACKEND
folder: models
orderModel.js > added

folder: routes
orderRoutes.js > added

server.js > updated
utils.js > updated

FRONTEND
folder: components
CheckoutSteps.js > added
Searchbox.js > added
Header1.js > added (optional)

folder: pages
Order.js > added
OrderHistory.js > added
PaymentMethod.js > added
PlaceOrder.js > added
Profile.js > added
ShippingAddress.js added
Signup.js > added

. Create Bottom header for categories.
. Create SideBar for categories (optional), Header1
. Create Categories for categories (optional), Header
. Create SearchScreen (optional).
components/Header.js without searchBar or sideBar
components/Header1.js with searchBar and sideBar (optional)
. Update App.js

# Ninth Commit-Admin

BACKEND
folder: models
orderModel > updated
productModel > updated

folder: routes
orderRoutes > updated
productRoutes > updated
userRoutes > updated
uploadRoutes > added

server.js > updated
utils.js > updated
index.js > updated

FRONTEND
folder: components
AdminRoute.js > added
protectedRoute.js > added
Header.js > updated
Header1.js > updated
Product.js > updated

folder: pages
Cart.js > updated
Dashboard.js > added
Order.js > updated
OrderList.js > added
Product.js > updated
ProductEdit.js > added
ProductList.js > added
Search.js > added
Signin.js > updated
Signup.js > updated
UserEdit.js > added
UserList.js > added

Modify > App.js, index.js, package.json

# Tenth Commit-Contact Page, Stripe, PayPal, Multiple Images, Cloudinary

. Create Cloudinary Account, update .env
. Create PayPal Account (sandbox)
. Create Stripe Account (test account), npm i stripe
. Create ContactPage update App.js
. Rate and review products
. Pagination on HomeScreen
. Multiple Images on Product Page and Image Magnifier
. Rename Product.js to ProductMag.js so it is less confusing with components: product.js

BACKEND
folder: models
messageModel.js > added
productModel.js > updated (multiple images)

folder: routes
messageRoutes > added
productRoutes > updated
stripeRoutes > added
userRoutes > updated

config.js > added
server.js > updated
.env.example > update
utils.js > updated

FRONTEND
npm i stripe, paypal

folder: components  
StripeCheckout.js > added
Header.js > updated
Header1.js > updated
BottomHeader.js > updated
Footer.js > updated
BottomFooter.js > updated
LoadingBox.js > updated
Product.js > updated

App.js > updated (divided so it is easier to read)
index.css > updated

folder: pages
Cart.js > updated
Contact.js > added
Dashboard.js > updated
Home.js > updated
Messages.js > added
Order.js > updated
OrderHistory.js > updated
OrderList.js > updated
PaymentMethod.js > updated
PlaceOrder.js > updated
ProductEdit.js > updated
ProductList.js > updated
Product.js to ProductMag > updated multiple images carousel & react-image-magnify
Profile.js > updated
Search.js > updated
ShippingAddress.js > updated
UserList.js > updated

# Eleventh Commit-ProductMag Lightbox, Options, nodemailer purchase receipt

. Add Toast notifications to components > Product.js
. Update count in stock
. Low Quantity Alert!
. Optional vertical thumbnails for ProductMag.js or horizontal thumbnails for ProductMagRow.js
. Add Lightbox and carousel for ProductMag.js
. Add nodemailer for payment receipt

BACKEND
folder: routes
orderRoutes > updated/count in stock

config.js > updated
utils.js > updated (nodemailer receipt)

FRONTEND
folder: components
Header.js > updated
Header1.js > updated
Product.js > updated

folder: pages
Messages.js > updated
ProductMag > updated
ProductMagRow (optional) > added
Home.js > updated
ProductMagRow.js > added (optional use)
ShippingAddress.js > updated

index.css > updated

# Twelfth Commit-Stripe Delivery Receipt thru nodemailer, sidebar toast notification, low quantity

. Modify toast notification and create sidebar for desktop, keeping toast notification for mobile
. Add Delivery email information thru nodemailer for admin (added deliveryDays, carrierName, trackingNumber)

BACKEND
folder: models
orderModel.js > updated (added deliveryDays, carrierName, trackingNumber)

folder: routes
orderRoutes.js > update (added deliveryDays, carrierName, trackingNumber)
stripeRoutes.js > updated

server.js > updated
utils.js > updated

FRONTEND
folder: components
Header.js > updated
Product.js > updated (low quantity, count in stock 5 or less)
Sidebar.js > added

folder: pages
Home.js > updated (added sidebar toast notification in desktop)
Order.js > updated (added deliveryDays, carrierName, trackingNumber)
OrderHistory.js > updated (added deliveryDays, carrierName, trackingNumber)
OrderList.js > updated (added deliveryDays, carrierName, trackingNumber), add user info for admin mailing @ contact info
Search.js > updated (added sidebar toast notification in desktop)

index.css > updated

# Thirteenth Commit-Add Skeleton and replace LoadingBox component

FRONTEND
npm i react-loading-skeleton
css > add css marked for Skeleton.css

folder > components:
Skeleton.js
SkeletonDashboard.js
SkeletonHome.js
SkeletonMessage.js
SkeletonOrderHistory.js
SkeletonOrderList.js.js
SkeletonProductList.js
SkeletonProductMag.js
SkeletonUseEdit.js
SkeletonUserList.js

folder > screens:
Dashboard.js (Lines 8, 37-39, 60)
Home.js (Lines 12, 49-50, 114-122)
Messages.js (Lines 9, 71-73, 130-138)
OrderHistory.js (Lines 3, 9, 36-38, 74-80)
OrderList.js (Lines 3, 11, 57-59, 122-130)
ProductList.js (Lines 10, 81-83, 160-170)
ProductMag.js (Lines 26, 71-73, 173)
UserEdit.js (Lines 10, 50-52, 101, 137)
UserList.js (Lines 3, 11, 57-59, 112-120)

# Fourteenth Commit-Modify Backend Utils.js, Password reset added

BACKEND
utils.js > update for date format (mm/dd/yyyy)

folder: models
userModel.js > updated

folder: routes
orderRoutes.js > updated
userRoutes.js > updated

FRONTEND
folder: components
Header.js > updated
Header1.js > updated

folder > pages
Signin.js > updated
ForgetPassword.js > added
ResetPassword.js > added

App.js > updated (ForgetPassword.js, ResetPassword.js)

# Fifteenth Commit-Regex complexity for password

BACKEND
folder > routes
stripeRoutes > updated
userRoutes > updated

utils.js > updated

FRONTEND
folder > components
Header.js > updated
Product.js > updated

folder > pages
ResetPassword.js > updated
Signup.js > updated

index.css > update image size in components > Product.js

# Sixteenth Commit Final

BACKEND
folder: models
productModel.js > updated

folder: routes
orderRoutes.js > updated
stripeRoutes.js > updated
userRoutes.js > updated

server.js > updated
utils.js > updated
config.js > updated

FRONTEND
folder: components
skeleton/SkeletonProductMag.js > updated

folder: pages
ForgetPassword.js > updated
ProductEdit.js > updated
ProductMag.js > updated
ResetPassword.js > updated
Signin.js > updated
UserEdit.js > updated
UserList.js > updated

# Seventeenth Commit React-Lazyload

FRONTEND
npm install react-lazyload

folder > components
Product.js > updated for Lazyloading images

# Eighteenth Commit Final

BACKEND
.env.example > updated with correct secret word "collecting" for jwt
utils.js > updated with website: exoticwoodpen.com
config.js > updated
