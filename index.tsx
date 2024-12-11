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
let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1

function getPizzaDetail(identifier: string | number): Pizza | undefined {
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

const orderQueue: Order[] = []

function addToArray<T>(array: T[], item: T): T[] {
    array.push(item)
    return array
}
//Example usage
addToArray<Pizza>(menu, {id: nextPizzaId++, name: "Chicken Tamu", price: 10})
addToArray<Order>(orderQueue, {id:nextPizzaId++, pizza: menu[2], status: "ordered"})

console.log(menu)
console.log(orderQueue)

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizza= {
        id: nextPizzaId++,
        ... pizzaObj
    }
    menu.push(newPizza)
    return newPizza
}
addNewPizza({name:"chicken Tamu", price: 12})
addNewPizza({name:"PiliPili", price: 13})
addNewPizza({name:"Spicy Sausage", price: 11})

function placeOrder(pizzaName: string): Order | undefined {
const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
  if(selectedPizza === undefined) {
   console.error(`${pizzaName} does not exist in the menu`) 
   return
  }
cashInRegister = selectedPizza.price
const newOrder: Order = {id: nextOrderId++, pizza: selectedPizza, status: "ordered"};
  orderQueue.push(newOrder)
  return newOrder
}

function completeOrder(orderId: number): Order | undefined {
    let order = orderQueue.find(order => order.id === orderId)
    if(order === undefined) {
        console.error(`Order ${orderId} does not exist`)
        return
    }
   order.status = "completed"
return order
}



placeOrder("chicken Tamu")
completeOrder(1)

console.log("menu", menu);
/*console.log("cash in register", cashInRegister);
console.log("oder queue", orderHistory);*/