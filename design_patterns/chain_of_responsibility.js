export const chain = () => {
  class Chain {
    setNextChain = (chain) => (this.nextInChain = chain);
  }

  class ServiceRequest {
    constructor(make, year, service) {
      this.make = make;
      this.year = year;
      this.service = service;
    }

    getMake = () => this.make;
    getYear = () => this.year;
    getService = () => this.service;
  }

  class AutoShop extends Chain {
    fix = () =>
      console.log(`Service request fulfilled at ${this.location} location`);

    assess = (request) => {
      if (
        request.year <= this.year &&
        this.makes.includes(request.make) &&
        this.services.includes(request.service)
      )
        return this.fix();
      return this.nextInChain.assess(request);
    };
  }

  class OldModelShop extends AutoShop {
    year = 2010;
    makes = ["Chevy", "Dodge", "Ford"];
    services = ["Body Work", "Engine Work", "Transmission Work"];
    location = "Old Model Shop";
  }

  class NewModelShop extends AutoShop {
    year = 2021;
    makes = ["Chevy", "Dodge", "Ford"];
    services = ["Body Work", "Engine Work", "Transmission Work"];
    location = "New Model Shop";
  }

  class RoutineShop extends AutoShop {
    year = 2021;
    makes = ["Chevy", "Dodge", "BMW", "Benz", "Honda", "Ford"];
    services = ["Oil Change", "Tire Rotation", "Brake Check"];
    location = "Routine Shop";
  }

  class ImportShop extends AutoShop {
    year = 2021;
    makes = ["Benz", "Honda", "BMW"];
    services = ["Body Work", "Engine Work", "Transmission Work"];
    location = "Import Shop";
  }

  class Error {
    assess = () =>
      console.log("Sorry we cannot fulfill your request at this time.");
  }

  class Receptionist {
    routineShop = new RoutineShop();
    oldModelShop = new OldModelShop();
    newModelShop = new NewModelShop();
    importShop = new ImportShop();
    error = new Error();

    constructor() {
      this.routineShop.setNextChain(this.oldModelShop);
      this.oldModelShop.setNextChain(this.newModelShop);
      this.newModelShop.setNextChain(this.importShop);
      this.importShop.setNextChain(this.error);
    }

    receiveRequest = (make, year, serviceRequest) =>
      this.routineShop.assess(new ServiceRequest(make, year, serviceRequest));
  }

  const shop = new Receptionist();

  shop.receiveRequest("Chevy", 1995, "Oil Change");
  shop.receiveRequest("Chevy", 1995, "Body Work");
  shop.receiveRequest("Chevy", 2019, "Body Work");
  shop.receiveRequest("BMW", 1995, "Body Work");
  shop.receiveRequest("BMW", 1995, "Oil Change");
  shop.receiveRequest("Honda", 1995, "Body Work");
  shop.receiveRequest("Honda", 2021, "New Headlights");
};
