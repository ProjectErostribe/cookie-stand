 /*   Notes from me trying this on my own:
 
 function generateSales(averageSales, customerAtThatTime){
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
}; 


  //Notes from class 7: July 27, 2021:
//alert("Loaded your JS");

//we need to be able to keep yp with sales numbers byt he hours so we need to have a list of the hours
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
    
    //Use our random customer method.  In same object/instance so use 'this'
    //add each random number of customers to our array where each index aligns with an hour in the day array

    for (let index = 0; index < bunsinessHours.length; index++){
        //add computed average customer value for each hour to our array/list
        //the 'this' keyword...the props we're using are in this class so we need 'this'
        this.customersPerHour.push(getRandomNumberOfCustomersGivenARange(this.minCustomers, this.maxCustomers))
        return (Math.floor(Math.random() * (maxCustomers - minCustomers +1)) + minCustomers);
    }
    console.log("Loaded Up the customers...")
},

//now based on an average number of customers in a given hour, we need to the value from the arry random number along with data given for 
getCookiesSoldPerHour: function(){
    //initalize an ongoing total
    totalDailyCookies = 0
    this.getCustomersPerHour(); //load customers data
    //lets load up our cookiesSoldPerHour by walking through each element in our average customers per day array (number of customers * )
    for (let index = 0; index < this.customersPerHour.length; index++){
        //calc number of cookies
        let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookieSale);
        //Lets floor it so we get a whole number
    }
}

//call the methods
//console.log(Seattle.getCustomersPerHour());
Seattle.getCustomersPerHour(); //should load the array

//iterate through the array customers per hour
for (let index = 0; index < Seattle.customersPerHour.length; index++) {
    // console.log(Seattle.getcustomersPerHour[index]);
    
}   */


/* This is from me coding along with Kevin's code.  I changed his comments to better suit my own notes:  */

//alert ("JS linked!")

//We need a generic function customized to our needs to pass the data we have
//We also need a random number of customers within range of data we were given.
function getRandomNumberOfCustomersGivenARange(minCustomers, maxCustomers){
    return (Math.floor(Math.random() * (maxCustomers - minCustomers)) + minCustomers);  /* if we get 0 we start at minCustomers, otherwise we multiply difference between max and min time 0 or 1 adding 1 because zero based.  I did this in my original code and caught this in the class lecture.  I would like to know the difference in how Kevin did his and how I did mine
        generateRandomCustomers: function(){
        const range = SeattleStore.maxCustomer - SeattleStore.minCustomer
        const randomCount = Math.random() * range - SeattleStore.minCustomer
        return Math.ceil(randomCount)
    },*/
}

// The hours of operation for all stores are: 6am to 8pm
// In order to keep up with sales numbers by the hour we need to have a list of all the hours.
const businessHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

