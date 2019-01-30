module.exports = {

    //a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.
    success: (item) => {
        if (item.enhancement === 0) {
            return true;
        }
    },

    //a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.
    fail: () => {

    },
    //a repair(item) method that accepts an item object and returns a new item with the durability restored to 100.
    repair: (item) => {

        let newItem = {
            name: item.name,
            type: item.type,
            durability: 100,
            enhancement: item.enhancement
    
        }
    
        return newItem
    }

   

}