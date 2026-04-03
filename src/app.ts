import express  from "express";
import hotelRoutes from "./routes/hotel.route";

const app = express();

app.use(express.json());

app.use("/api/hotel",hotelRoutes );


app.get("/", (req, res) => {
    res.send("Hello, World!");
});

export default app;




