const person = {
    firstName: 'oussama',
    lastName: 'elhouari',
    credit: 10000,


    greeting: function(){
        return `hello ${this.firstName} ${this.lastName} and welcome.`
    },
    getNewCredit: function(expenses){
        return this.credit - expenses
    }

}

console.log(person);