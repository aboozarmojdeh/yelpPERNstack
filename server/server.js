require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const db = require("./db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// app.use((req,res,next)=>{
//     console.log('something');
//     next();
// })

// ROUTES
// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const allRestaurants = await db.query("SELECT * FROM restaurants");
    const restaurantRatingsData = await db.query(
      "SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id,COUNT(*),TRUNC(AVG(rating),1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id=reviews.restaurant_id"
    );
    console.log("allRestaurants",allRestaurants);
    console.log("restaurantRatingsData",restaurantRatingsData);
    res.status(200).json({
      status: "success",
      results: restaurantRatingsData.rows.length,
      data: {
        restaurants: restaurantRatingsData.rows,
      },
    });
  } catch (err) {
    console.error(err.message);
  }
});
// Get a restaurant with reviews
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await db.query("SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id,COUNT(*),TRUNC(AVG(rating),1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id=reviews.restaurant_id WHERE id=$1", [
      id,
    ]);
    const reviews = await db.query(
      "SELECT * FROM reviews WHERE restaurant_id=$1",
      [id]
    );
    console.log(req.params);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (err) {
    console.error(err.message);
  }
});

// add a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  try {
    const { name, location, price_range } = req.body;
    const newRestaurant = await db.query(
      "INSERT INTO restaurants (name,location,price_range) VALUES ($1,$2,$3) RETURNING *",
      [name, location, price_range]
    );
    // const createRestaurant=await ...
    console.log(req.body);
    res.status(201).json({
      status: "success",
      data: {
        restaurant: newRestaurant.rows[0],
      },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//update a restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, price_range } = req.body;
    const updatedRestaurant = await db.query(
      "UPDATE restaurants SET name=$1,location=$2,price_range=$3 WHERE id=$4 RETURNING *",
      [name, location, price_range, id]
    );
    console.log(updatedRestaurant.rows[0]);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: updatedRestaurant.rows[0],
      },
    });
  } catch (err) {
    console.error(err.message);
  }
});
// delete  restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRestaurant = await db.query(
      "DELETE FROM restaurants WHERE id=$1",
      [id]
    );
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.error(err.message);
  }
});

// Add a review to restaurant
app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
  try {
    const { id } = req.params;
    const { restaurant_id, name, review, rating } = req.body;
    const newReview = await db.query(
      "INSERT INTO reviews (restaurant_id,name, review,rating) VALUES ($1,$2,$3,$4) RETURNING *",
      [id, name, review, rating]
    );

    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (err) {
    console.error(err.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is listening to PORT ${PORT}`);
});
