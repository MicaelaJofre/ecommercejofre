## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Home section](#HomeSection)
5. [Details section](#DetailsDection)

### General Info
***
This proyect is a E-commerce of home decoration products. It aims to provide the user with all the basic functionalities from the front-end using React.

### Screenshot
***
<figure style="text-align: center">
   <img 
    alt="Website screenshot"
    with="350" 
    height="350" 
    src='./public/assets/image/readme.jpg'
  />
  <figcaption>Website screenshot</figcaption>
</figure>

## Technologies
***
A list of technologies used within the project:
* React JS v-8.3.1 (core library)
* React Router Dom v-6.2.2 (navigation).
* React-fontawesome v-0.1.17 (icons).
* Firebase v-9.6.9 (backend).
* Formik v-2.2.9 (form validation)

## Installation
***
1. You must clone the repository using  _`git clone https://github.com/MicaelaJofre/ecommercejofre.git `_
2. Then you will need to install all the dependencies of the project, for that you will need to run _`npm install` (you can also use `npm i`)_
3. Lastly, you can run the project and perform the tests using _`npm start`_

## HomeSection
***
Shows the main information of the website. With links to each section that the client can access.

## DetailsDection
***
- Shows extended information of the product searched or selected.
- You can select the quantity you want to buy, validated by the quantity in stock.
-The cart has logic as products are added.
-Before finalizing the purchase, the buyer's data is collected in Firebase through a form.
-Finally, the completion of the purchase is shown with its respective id.