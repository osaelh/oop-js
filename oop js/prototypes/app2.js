function Person (firstName,lastName,credit) {
   this.name = firstName,
   this.lastName = lastName,
   this.credit = credit
//    this.getNewCredit =function (expenses) {
//     return this.credit - expenses
//  };
}

let oussama = new Person('oussama', 'elhouari' ,25000);
Person.prototype.getNewCredit = function (expenses) {
    return this.credit - expenses
 };

function Customer(name,lastName,credit,phoneNumber,membership) {
    Person.call(this,name,lastName,credit);
    this.phoneNumber = phoneNumber,
    this.membership = membership
}

Customer.prototype = Object.create(Person.prototype)

let customer1 = new Customer('otman','qorqach', 5000,06-66-77-55-87,'standard')


console.log(oussama);
console.log(customer1);
console.log(customer1.getNewCredit(200));
console.log(oussama.getNewCredit(1500));
console.log(oussama.hasOwnProperty('lastName'));

