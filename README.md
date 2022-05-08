# yelpcamp

[LIVE DEMO](https://afternoon-brushlands-03058.herokuapp.com/)

This is one of the project in the journey to becoming a Web Developer.

This project was part of Colt Steele's course.

This project was created using Node.js, Express, MongoDB, and few other packages.

This web app uses mongoDBAtlas to store collections, cloudinary API for storing images and mapbox API to show the location of the campground on the map.

Users can create new campgrounds, edit campground, and add review for a campground. In order to do such things, users need to create an account and log in to get authorized to do such actions.

## Test it on your machine 
1. Create a mongoDB cloud account, cloudinary account to get cloudinary key and secret, and mapbox account to token
2. Clone the project to your local machine
3. Create .env file and set up variables

```
CLOUDINARY_CLOUD_NAME='<cloudinary_name>'
CLOUDINARY_KEY='<cloudinary_key>'
CLOUDINARY_SECRET='<cloudinary_secret>'
MAPBOX_TOKEN='<mapbox_token>'
DB_URL='<url>'
SECRET='<secret>'
```

4. Go to project direction and run these command in terminal

```
npm i
node app.js
```

5. Browse [localhost:3000](http://localhost:3000/)
