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
        return generateSales
    }
}