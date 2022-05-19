//this includes the vehicle class as a module
// below is imported vehicle class
class Vehicle {
  constructor(make, model, year, color, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passenger = 0;
    this.speed = 0;
    this.mileage = mileage;
    this.started = false;
    this.numberOfWheels = 0;
  }
}
//below will be the extend
class car extends Vehicle {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }
  //method for seeing if people can go in car
  loadPassenger(num) {
    if (num < this.maxPassengers) {
      console.log("room is available");
    }
  }
  //I wasn't really sure what to write with the methods so I console log the methods
  start() {
    if (this.fuel > 0) {
      console.log("engine is running and car is driving");
    }
  }
  scheduleService(mileage) {
    if (mileage > 30000) {
      this.scheduleService === true;
      console.log("Time for service");
    }
  }
}

const VehicleModule = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  "Mecury",
  "Sedan",
  "1965",
  "color",
  "mileage"
);
console.log(v.make);
