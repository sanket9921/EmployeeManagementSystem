import React, { useState, useEffect } from "react";
import CarService from "../sevice/addCarService";
export default function AddCar() {
  const [carName1, setCarName] = useState("");
  const [brand1, setBrand] = useState("");
  const [year1, setyear] = useState();
  const [color1, setColor] = useState("");

  const addCarDetails = () => {
    console.log("addCarDetails");
    const cars = {
      CarName: carName1,
      brand: brand1,
      year: year1,
      color: color1,
    };
    CarService.addCarData(cars)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="container">
      <h1>Add Car Details</h1>
      <br></br>
      <br></br>
      <div className="mb-3">
        <label className="form-label">Car Name</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setCarName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">brand</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">year</label>
        <input
          type="number"
          className="form-control"
          onChange={(e) => setyear(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">color</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={addCarDetails}>
        Submit
      </button>
    </div>
  );
}
