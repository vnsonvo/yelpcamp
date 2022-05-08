const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const camp = new Campground({
      author: "6273c5cf77714db9df3024ac",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url: "https://res.cloudinary.com/dx4pug7xe/image/upload/v1651821506/YelpCamp/iajbhejvqqa7emrckwc1.png",
          fileName: "YelpCamp/iajbhejvqqa7emrckwc1",
        },
        {
          url: "https://res.cloudinary.com/dx4pug7xe/image/upload/v1651821505/YelpCamp/ipf3i4xeqi5mchlsdtss.png",
          fileName: "YelpCamp/ipf3i4xeqi5mchlsdtss",
        },
        {
          url: "https://res.cloudinary.com/dx4pug7xe/image/upload/v1651821506/YelpCamp/fqnjzgnqnvx1omy6hw2j.png",
          fileName: "YelpCamp/fqnjzgnqnvx1omy6hw2j",
        },
      ],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nesciunt
      architecto doloremque numquam aspernatur accusantium ipsam fuga, enim
      culpa atque eos eius saepe earum eaque officia maxime est. Deserunt,
      velit!`,
      price: Math.floor(Math.random() * 20) + 10,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
