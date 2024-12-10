type UserRole =  "guest" | "member" | "Admin"

type User = {
    name: string
    role: UserRole
}

const users: User[] = [
    { name: "Don", role: "Admin" },
    { name: "King", role: "member" },
    { name: "John", role: "guest" },
]

function fetchUserDetails(userName: string): User {
    const user = users.find(user => user.name === userName)
    if(!user) {
        throw new TypeError(`User with ${userName} not found`)
    }
    return user
}





/*let age: number[  ] = [100, 101]

let myName: string = "Don"

let numberOfWheels: number = 4
let isStudent: boolean = false

type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}

let person1: Person= {
    name: "Don"
    age: 23,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Nairobi",
        country: "Kenya"
    }
}

let person2: Person= {
    name: "Don"
    age: 23,
    isStudent: false
}

let people: Person[] = [person1, person2]

function addNewPerson(Person: Person) {
    console.log(`${Person.name} lives at${Person.address?.street}`)
}
*/
