# MERN Antiquepox eCommerce antique website

. create git repository called antiquepox

# 1st Commit-Antiquepox Layout components and pages

. Create React App
. Add Bootstrap and all css

FRONTEND
.folder: components
Header.js > added
BottomHeader.js > added
Footer.js > added
BottomFooter.js >added

.folder: pages
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
