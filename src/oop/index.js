class Customer{
    constructor(id, customerNumber){
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

// Customer customer = new Customer(); yerine bunu yapıyoruz
let customer = new Customer(1,"12345");
//Prototyping
customer.name = "Murat Kurtboğan" // Instance'a yapılan prototyping
console.log(customer.name)

Customer.bisey = "Bişey" // Class'a yapılan prototyping
console.log(Customer.bisey)

console.log(customer.customerNumber)
console.log(customer.id + " " +customer.customerNumber)

class IndividualCustomer extends Customer{
    constructor(firstName, id, customerNumber){
        super(id, customerNumber)
        this.firstName = firstName;
    }
}
class CorporateCustomer extends Customer{
    constructor(companyName, id, customerNumber){
        super(id, customerNumber)
        this.companyName=companyName
    }
}