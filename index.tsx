type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}


function getPizzaDetail(identifier: string | number) {
    if(typeof identifier === 'string') {
        return menu.find(pizza => pizza.name === identifier.toLowerCase())
    } else if (typeof identifier === 'number') {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Could not retrieve item at this time")
    }
    
}

const menu: Pizza[] = [
    { id: 1, name: "margharita", price: 8 },
    { id: 2, name: "pepperoni", price: 10 },
    { id: 2, name: "hawaiian", price: 10 },
    { id: 4, name: "veggie", price: 9 },
]
let cashInRegister = 100
let nextOrderId = 1
const orderHistory: Order[] = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName.toLowerCase()
  if(selectedPizza === undefined) {
   console.error(`${pizzaName} does not exist in the menu`) 
   return
  }
cashInRegister = selectedPizza.price
const newOrder: Order = {id: nextOrderId++, pizza: selectedPizza, status: "ordered"};
  orderHistory.push(newOrder)
  return newOrder
}

function completeOrder(orderId: number) {
    let order = orderHistory.find(order => order.id === orderId)
    if(order === undefined) {
        console.error(`Order ${orderId} does not exist`)
        return
    }
   order.status = "completed"
return order
}


addNewPizza({id:1, name:"chicken Tamu", price: 12})
addNewPizza({id:2, name:"PiliPili", price: 13})
addNewPizza({id:3, name:"Spicy Sausage", price: 11})

placeOrder("chicken Tamu")
completeOrder(1)

console.log("menu", menu);
console.log("cash in register", cashInRegister);
console.log("oder queue", orderHistory);