var pizza = {
    crust: "thin",
    cheese: "mozzarella",
    sauce: "marinara",
    addToppings:
        function () {
            console.log("Please add pepperoni and sausage");
        }
};

var orderPizza = function () {
    console.log(crust),
        console.log(cheese),
        console.log(sauce),
        console.log(addToppings())
}