# backed-challenge
## server
  - NodeJs with ExpressJs
  - `cd` into /server
  - run `npm install`
  - run `node index.js`
## database
  - MongoDB
  - make sure your mongo server is on
  - run `mongod`
### Insert products into the products collection via commands below
  - `mongo`
  - `use products`
  - `db.products.insert({"category" : "food", "name" : "sandwhich"})`
  - `db.products.insert({"category" : "food", "name" : "pizza"})`
  - `db.products.insert({"category" : "drinks", "name" : "pepsi"})`
  - we allocate 2 categories (food and drinks) of products for the sake of trying out the web app.
## client
  - React with Redux
  - `cd` into /server
  - run `npm install`
  - run `npm start`
