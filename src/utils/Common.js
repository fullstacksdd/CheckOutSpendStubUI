var faker = require('faker');
const random = require("lodash");

// return the customer data 
export const getCustomerData = () => {
      let id = faker.fake("{{random.uuid}}")
      let buildingName = 'Exchange House'
      let flatNumber = faker.fake("{{address.secondaryAddress}}") //this.state.flatNumber,
      let houseNumber = random.random(999) //this.state.houseNumber,
      let line2 = faker.fake("{{address.streetAddress}}") //this.state.streetName,
      let line4 = faker.fake("{{address.streetName}}") //this.state.streetAddress,
      let town = faker.fake("{{address.city}}") //this.state.city
      let county = faker.fake("{{address.county}}") //this.state.county,
      let postCode = faker.fake("{{address.zipCode}}") //this.state.zipCode,
      let email = faker.fake("{{internet.email}}") //this.state.email,
      let phone = faker.fake("{{phone.phoneNumber}}") //this.state.phoneNumber,
      let dateOfBirth = faker.fake("{{date.past}}") //this.state.dateOfBirth,
      let dependents = random.random(9) //..this.state.dependents,
      let employmentStatus = 'EMPLOYED' //this.state.employmentStatus,
      let accountNumber = faker.fake("{{finance.account}}") //this.state.accountNumber,
      let sortCode = '20-20-15' //this.state.sortCode
      let grossAnnualIncome = faker.fake("{{finance.amount}}") //this.state.currencySymbol + this.state.grossAnnualIncome
      let firstName = faker.fake("{{name.firstName}}") //this.state.firstName,
      let lastName = faker.fake("{{name.lastName}}") //this.state.lastName,
      let maritalStatus = 'MARRIED'
      let middleName = 'G'
      let residentialStatus = 'HOME_OWNER'
      let title = 'Mr' //this.state.title

      let state = ({
        customer: {
          id: id,
          buildingName: buildingName,
          flatNumber: flatNumber,
          houseNumber: houseNumber,
          line2: line2,
          line4: line4,
          town: town,
          county: county,
          postCode: postCode,
          email: email,
          phone: phone,
          dateOfBirth: dateOfBirth,
          dependents: dependents,
          employmentStatus: employmentStatus,
          accountNumber: accountNumber,
          sortCode: sortCode,
          grossAnnualIncome: grossAnnualIncome,
          firstName: firstName,
          lastName: lastName,
          maritalStatus: maritalStatus,
          middleName: middleName,
          residentialStatus: residentialStatus,
          title: title
        }
       })
       return state;
}
