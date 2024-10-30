const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Response from Node Js api");
});

mongoose
  .connect(
    "mongodb+srv://syedammarcreative:zRyReGJ2it4UElpx@node-api-db.cx95a.mongodb.net/?retryWrites=true&w=majority&appName=node-api-db"
  )
  .then(() => {
    console.log("connected to DB");
    app.listen(3000, () => {
      console.log("running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

/* const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://syedammarcreative:zRyReGJ2it4UElpx@node-api-db.cx95a.mongodb.net/?retryWrites=true&w=majority&appName=node-api-db";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); */
