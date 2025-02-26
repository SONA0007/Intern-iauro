// pizza app

const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 }
];

const cashInDrawer = 100;
const orderQueue = [];

function addNewOrder(pizzaObj) {
    orderQueue.push(pizzaObj);
}

function placeOrder(pizzaName) {
    const selectPizza = menu.find(pizza => pizza.name === pizzaName);
    cashInDrawer += selectPizza.price;
    const neworder = { name: pizzaName, status: "ordered" };
    addNewOrder(neworder);

    if (!pizzaName) {
        console.log("Sorry, we don't have that pizza");
        return;
    }
    return neworder;
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)