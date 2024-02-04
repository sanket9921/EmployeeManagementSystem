const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Schema = mongoose.Schema;

const app = express();

app.use(express.json());
app.use(cors());
mongoose
  .connect("mongodb://127.0.0.1:27017/carshowroom")
  .then(() => console.log("Connected!"));

const carShema = new Schema({
  CarName: String,
  brand: String,
  year: Number,
  color: String,
});

const carModel = mongoose.model("cars", carShema);

const port = 8080;

app.get("/", async (req, res) => {
  const instance = await carModel.find();
  res.send(instance);
});

app.get("/:carname", async (req, res) => {
  const carname1 = req.params.carname;
  const instance = await carModel.find({ CarName: carname1 });
  res.send(instance);
});

app.post("/addcar", async function (req, res) {
  const instance = carModel(req.body);
  await instance.save();
  res.send("data added successfully");
});

app.delete("/:carName1", async function (req, res) {
  const carName1 = req.params.carName1;
  console.log(carName1);
  const instance = await carModel.deleteOne({ CarName: carName1 });
  res.send("data deleted successfully");
});

app.put("/:carName2", async function (req, res) {
  const carName2 = req.params.carName2;
  const instance = await carModel.updateOne({ CarName: carName2 }, req.body);
  res.send("data updated successfully");
});

app.listen(port, () => {
  console.log("Listening on " + port);
});
