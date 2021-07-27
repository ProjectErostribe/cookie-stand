 /*function generateSales(averageSales, customerAtThatTime){
    return averageSales * customerAtThatTime;
}

const SeattleStore = {
    minCustomer: 6,
    maxCustomer: 20,
    averageSales: 6.3,
    customerAtThatTime: 5,
    generateRandomCustomers: function(){
        const range = SeattleStore.maxCustomer - SeattleStore.minCustomer
        const randomCount = Math.random() * range - SeattleStore.minCustomer
        return Math.ceil(randomCount)
    },
    generateExplicit: function(){
        return generateSales(nextStore.averageSales, nextStore.customerAtThatTime);
    },
};
const nextStore = {
    averageSales: 6.3,
    customerAtThatTime: 5,
    generateNextStoreSales: function(){
        return generateSales(this.averageSales,this.customerAtThatTime);
    },
    generateExplicit: function(){
        return generateSales(nextStore.averageSales, nextStore.customerAtThatTime);
    }
}; */


// Notes from class 7:

//alert("Loaded your JS");

//we need to be able to keep yp with sales numbers byt he hours so weed need to have a list of the hours
const businessHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"]
//define an object literal
let Seattle = {
    // identify props
    minCustomers: 23,
    maxCustomer 65,
    avgCookiesSale: 6.3,
    customersPerHour: [],
    totalDailyCookies:0,
}

//We need a generic random function customized to our needs.  So we can pass in the data we have
//We need a random number of customers within the range of data we were given
getCustomersPerHour: function(){
    return (Math.floor(Math.random() * (maxCustomers - minCustomers +1)) + minCustomers);
    //Use our random customer method
}