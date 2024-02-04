import CarService from "../sevice/addCarService";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function UpdateCar() {
  const { carName } = useParams();

  const [carName1, setCarName] = useState("");
  const [brand1, setBrand] = useState("");
  const [year1, setyear] = useState();
  const [color1, setColor] = useState("");

  useEffect(() => {
    CarService.getcarsbyCarName(carName).then((res) => {
      console.log(res.data[0].brand);
      setCarName(res.data[0].CarName);
      setBrand(res.data[0].brand);
      setyear(res.data[0].year);
      setColor(res.data[0].color);
    });
  }, []);

  const updatecardata = () => {
    const cars = {
      CarName: carName1,
      brand: brand1,
      year: year1,
      color: color1,
    };

    CarService.updateCar(carName1, cars)
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
        <input type="text" className="form-control" value={carName1} />
      </div>
      <div className="mb-3">
        <label className="form-label">brand</label>
        <input
          type="text"
          className="form-control"
          value={brand1}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">year</label>
        <input
          type="number"
          className="form-control"
          value={year1}
          onChange={(e) => setyear(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">color</label>
        <input
          type="text"
          className="form-control"
          value={color1}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={updatecardata}>
        Submit
      </button>
    </div>
  );
}
