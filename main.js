// named export -> import
import { userData } from "./data/userdata.js";
// named export -> import mit "as newName" umbennen
import { userData2, userData3 as renamedUserData3 } from "./data/userdata.js"
// Default Export -> import lässt sich umbenennen
import renamedUserData4 from "./data/userdata.js";
import usersFromJson from "./data/savedUser.json" assert { type: "json" }

// create a new object key
const userWithFullname = usersFromJson.map((user) => {
    user.fullname = `${user.firstname} ${user.lastname}`
})

console.log({ userWithFullname })

const correctUserFromJson = usersFromJson.find(user => user.firstname === "Martin")

console.log({ correctUserFromJson })

const filteredUsersFromJson = usersFromJson.filter(user => user.firstname === "Martin")

// Long Version
// const filteredUsersFromJson = usersFromJson.filter(user => {
//     if (user.firstname === "Martin") {
//         return user
//     }
// })

console.log({ filteredUsersFromJson })

// delete Property of all Users
const allUsersWithoutFullname = usersFromJson.map(user => {
    delete user.fullname
    return user
})

console.log(allUsersWithoutFullname)

// Reduce