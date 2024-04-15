const express = require("express");
const connectDB = require("./src/config/connectDB");

const Routes = require("./src/routes/Routes");
 
const port = 3000;
const app = express();

// connect ot mongodb database
connectDB();

app.use(express.json());

// Routes
app.use("/", Routes);

app.listen(port, () => {
  console.log(`You server live on http://localhost:${port}`);
});

// {
//     "name": "Mens paragone Shoose",
//     "brand": "Paragon",
//     "category": "Fasion",
//     "description": "Comfortable and stylish.",
//     "price": 500,
//     "color": "Red",
//     "size": [
//       "6",
//       "7",
//       "8",
//       "9",
//       "10"
//     ],
//     "images": [
//       "https://example.com/shoe_image1.jpg",
//       "https://example.com/shoe_image2.jpg",
//       "https://example.com/shoe_image3.jpg"
//     ],
//     "rating": 2,
//     "quantity": 20
//   }
