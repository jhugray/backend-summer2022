# Shopify Backend Developer Intern Challenge

`π©βπ» ππ·πΎπΏπΈπ΅π π±π°π²πΊπ΄π½π³ π³π΄ππ΄π»πΎπΏπ΄π πΈπ½ππ΄ππ½ π²π·π°π»π»π΄π½πΆπ΄`


## Table of Contents

  * [Description](#description)
  * [Technologies](#technologies)
  * [Application](#application)
  * [Installation](#installation)
  * [Contribution](#contribution)
  * [Questions](#questions)

## Description

This is my application challenge for Shopify's Summer 2022 Backend internship.

Imagine you have a passion for pottery, and want to share your creations with the world. This application can help make those dreams a reality by providing a simple way to manage your inventory. You can list your creations (products) and sort them into specific categories to help your customers have a nice shopping experience. View, update, add, and delete products and categories using the CRUD routes. You can even download a CSV document containing all your products at the touch of a button!

## Technologies

* Javascript
* Node.js
* Express.js
* MySQL2
* Sequelize

## Application

This application has been deployed at: [https://shopify-be-intern-challenge.herokuapp.com](https://shopify-be-intern-challenge.herokuapp.com/ "Jess Ugray's backend challenge").

![image](https://user-images.githubusercontent.com/59127869/149660897-b97ec1ac-c247-4b14-b005-bd54638bf074.png)

All of the API CRUD calls have been entered into [ReqBin's online API tester](https://reqbin.com/) for convenience:
* [Get all products (Read)](https://reqbin.com/otvbpjk8)
* [Get a product by ID (Read)](https://reqbin.com/lhwlfiy8)
* [Update/Put a product by ID (Update)](https://reqbin.com/vdebo6dy)
* [Add/Post a product (Create)](https://reqbin.com/ojljkbjv)
* [Delete a product by ID (Delete)](https://reqbin.com/bwqedmta)
* [Get all categories (Read)](https://reqbin.com/qo9hpowq)
* [Get a category by ID (Read)](https://reqbin.com/khrcgzgn)
* [Update/Put a category by ID (Update)](https://reqbin.com/l27hzllo)
* [Add/Post a category (Read)](https://reqbin.com/clxpeptc)
* [Delete a category by ID (Delete)](https://reqbin.com/6jood1bi)

![4DEBE6A2-E03E-4DF1-8A5D-24359EED0B76](https://user-images.githubusercontent.com/59127869/149660644-284c5343-ee3a-429a-b8e8-22b6892fc1e2.jpeg)

## Installation

To test the API calls you can use the links above. If you wish to test or use the code locally, please follow these steps:

1. Download or clone the repo. 

2. You will need Node.js and npm. If you do not have these, please refer to [the npm docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

3. Open a terminal (or command line) at the root folder, and run `npm install` in the command line to install the dependencies. 

4. Create a file at the root directory called `.env` and store the following variables:
```
DB_NAME='store_backend_db'
DB_USER='<your msql username>'
DB_PW='<your mysql password'
```
If you do not have a mysql log in or need assistance, please refer to [the mySQL docs](https://dev.mysql.com/doc/refman/8.0/en/access-control.html).

5. If you wish to seed the database using the provided seed data, run  `npm seed` in the command line. 

6. To start the server, run `npm start`.

7. The application will be available at [http://localhost:3001/](http://localhost:3001/).

8. You may then use the application! You can make API calls from the command line, or using an API tester of your choice, such as [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/). 

## Contribution

Jess Hause Ugray, 2022

## Questions

If you have any questions, please reach out! Jess.ugray@gmail.com

