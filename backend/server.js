const express = require("express");
const app = express();
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/products", productRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
