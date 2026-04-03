const express = require("express");
const app = express();
import{Response ,Request} from "express"
import cors from "cors";


app.use(cors({
    origin: "http://localhost:5000", 
    methods: ["GET"],
    credentials: true
  }));

app.get("/supplier-a/hotels", (req:Request,res:Response ) => {
  const { city, delay } = req.query;

  const data = [
    {
      hotelId: "A-101",
      name: "Grand Istanbul Hotel",
      city: "Istanbul",
      price: 120,
      currency: "USD",
      stars: 5,
      available: true
    },
    {
      hotelId: "A-102",
      name: "Blue Sea Hotel",
      city: "Antalya",
      price: 80,
      currency: "USD",
      stars: 4,
      available: false
    }
  ];

  const result = city ? data.filter(h => h.city === city) : data;

  setTimeout(() => {
    res.json(result);
  }, delay ? Number(delay) : 0);
});

app.listen(4001, () => console.log("Supplier A running on 4001"));