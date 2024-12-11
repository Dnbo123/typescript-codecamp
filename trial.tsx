const gameScores = [10, 12, 14, 20]
const favouriteThings = ["Raindrops on Roses", "whiskers on kittens", "canadian loud"]
const voters = [{name: "Don", age: 23}, {name: "Lolo", age: 26}]

function getLastItem<Type>(array: Type[]): Type | undefined {
    return array[array.length - 1] 
}
console.log(getLastItem(gameScores))
console.log(getLastItem(favouriteThings))
console.log(getLastItem(voters))
/*
type UserRole =  "guest" | "member" | "Admin"

type User = {
    name: string
    role: UserRole
    id: number
}
type updatedUser = Partial<User>
let nextUserId = 1

const users: User[] = [
    {id: 1, name: "Don", role: "Admin" },
    {id: 2, name: "King", role: "member" },
    {id: 3, name: "John", role: "guest" },
]

function fetchUserDetails(userName: string): User {
    const user = users.find(user => user.name === userName)
    if(!user) {
        throw new TypeError(`User with ${userName} not found`)
    }
    return user
}

function updateUser(id: number, updates: any) {
    //Find user in array by Id
    const foundUser = users.find(user => user.id === id)
    if(!foundUser) {
        console.error("user not found")
        return
    }
    Object.assign(foundUser, updates)
}

function addNewUser(newUser: Omit<User, "id">): User {
    let user: User = {
        id: nextUserId++,
        ...newUser
    }
    users.push(user)
    return(user)
}

//Exampple updates
updateUser({userName: "Don", role: "guest  "});

console.log(users)
*/




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
