import express  from "express";
import hotelRoutes from "./routes/hotel.route";
import supplierARoutes from "./routes/supplierA.route";
import supplierBRoutes from "./routes/supplierB.route";

const app = express();

app.use(express.json());

app.use("/api/hotel",hotelRoutes );

// Mock Suppliers
app.use("/supplier-a/hotels",supplierARoutes );
app.use("/supplier-b/hotels",supplierBRoutes );


app.get("/", (req, res) => {
    res.send("Hello, World!");
});

export default app;




