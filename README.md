# Your-Wellness-Dost-
This is the repository for your syntax error hackathon project

Team Members/Contributors

1) Shantanu Prakash (Designer and Team Leader)
2) Shivesh Gulati (Developer)

Statement of purpose for our web-application / Problem Statement:
The purpose of our web application is to ensure, that each and every user who visits, this app leads a healthier life

Technologies Used:-

1) HTML
2) CSS  (Static pages for styling)
3) Javascript (Static pages for functionality and APIs)
4) Pug Template (For serving Dynamic HTML Pages and responses from the backend
5) Node JS + Express (For backend and routing)

Folder Structure:

1) static folder: Contains all the static files such as the CSS style files and Javascript files and all the image assets      for the various pages of the website

2) views folder: Contains all the  pug files, which are the dynamic HTML files

3) users folder: Where information about the registered users is stored (Our application does not have a dedicated database as of now)

Entry point for the application:
app.js file

Dependenices:
1) multer 
2) pug
3) express

This web-application uses two API's

1) Edamam nutrition API : For the purpose of tracking calories, and other nutrients in the food items.

   Get a key and authentication id for the API, from here: https://developer.edamam.com/edamam-nutrition-api
   
   let app_id="Your_authentication_id_here" (Copy and replace this text with authentication id obtained from Edamam             Nutrition API site after logining in)
   
   let api_key="Your_key_here" (Copy and replace this text with the authorization key obtained from Edamam nutrition site)
   
   Paste both these lines into line 22 and line 23 of script_tracker inside the static folder.
   

2) Health News API: For getting latest health updates.

   Get a key for the API, from here: https://newsapi.org/s/india-health-news-api
   
   let api_key="Your_Key_Here" (Copy and replace the this text with the key obtained from Health News API site and then        paste this between  line 10 and line 11 of script_index.js file in the static folder.
   


   
 
 
