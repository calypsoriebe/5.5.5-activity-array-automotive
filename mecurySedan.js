//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle;
/*
//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  "Mecury",
  "Sedan",
  "1965",
  "color",
  "mileage"
);
console.log(v.make);
*/
class Car extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassenger = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }

  loadPassenger(num) {
    if (this.passenger < this.maxPassenger) {
      if (this.passenger + num <= this.maxPassenger) {
        this.passenger = num;
        return this.passenger;
      } else {
        console.log(
          "There is not enough room for" + " " + num + " " + "people"
        );
      }
    } else {
      console.log("There is no more room");
    }
  }

  start() {
    if (this.fuel > 0) {
      console.log("the car has started");
      return (this.started = true);
    } else {
      console.log("No fuel");
      return (this.started = false);
    }
  }

  service(mileage) {
    if (mileage > 30000) {
      this.scheduleService = true;
      console.log("Schedule service");
    }
  }
}

let newCar = new Car("Mercury", "Sedan", "2010", "black", 25000);
newCar.start();
newCar.loadPassenger(8);
newCar.service(378888);
