import React, { useState, useEffect } from "react";
import CarService from "../sevice/addCarService";
import { Link } from "react-router-dom";
export default function ShowCars() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    CarService.getcars()
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const deletecar = (carName) => {
    CarService.deletecar(carName)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Car Name</th>
            <th scope="col">brand</th>
            <th scope="col">year</th>
            <th scope="col">color</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>

        <tbody>
          {cars &&
            cars.map((car) => (
              <tr>
                <th scope="row">{car.CarName}</th>
                <td>{car.brand}</td>
                <td>{car.year}</td>
                <td>{car.color}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deletecar(car.CarName)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link
                    className=" btn btn-warning"
                    to={"/updateCar/" + car.CarName}
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
