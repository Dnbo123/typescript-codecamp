const menu = [
    {name: "margharita", price: 8 },
    {name: "pepperoni", price: 10 },
    {name: "hawaiian", price: 10 },
    {name: "veggie", price: 9 },
]

const cashInRegister = 100
nextOrderId = 1
const orderQueue = []

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
cashInRegister = selectedPizza.price
const newOrder = {id: nextOrderID++, pizza: selectedPizza, status: "ordered"};
  orderQueue.push(newOrder)
  return newOrder
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId)
   order.status = "completed"
return order
}

addNewPizza({name:"chicken Tamu", price: 12})
addNewPizza({name:"PiliPili", price: 13})
addNewPizza({name:"Spicy Sausage", price: 11})

placeOrder("chicken Tamu")
completeOrder("1")

console.log("menu", menu);
console.log("cash in register", cashInRegister);
console.log("oder queue", orderQueue);