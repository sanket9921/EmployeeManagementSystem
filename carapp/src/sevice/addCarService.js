import axios from "axios";

const CARSHOWROOM_API = "http://localhost:8080";

class CarService {
  addCarData(cars) {
    return axios.post(CARSHOWROOM_API + "/addcar", cars);
  }
  getcars() {
    return axios.get(CARSHOWROOM_API);
  }
  getcarsbyCarName(carName) {
    return axios.get(CARSHOWROOM_API + "/" + carName);
  }
  deletecar(carName) {
    return axios.delete(CARSHOWROOM_API + "/" + carName);
  }

  updateCar(carName, cars) {
    return axios.put(CARSHOWROOM_API + "/" + carName, cars);
  }
}

export default new CarService();
