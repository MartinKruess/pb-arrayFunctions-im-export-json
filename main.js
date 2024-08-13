// named export -> import
import { userData } from "./data/userdata.js";

// named export -> import mit "as newName" umbennen
import { userData2, userData3 as renamedUserData3 } from "./data/userdata.js"

// Default Export -> import lässt sich umbenennen
import renamedUserData4 from "./data/userdata.js";

import usersFromJson from "./data/savedUser.json" assert { type: "json" }
import datingAppUsersFromJson from "./data/allDatingAppUser.json" assert {type: "json"}

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

// Kombination von Methoden
// Szenario: In einer Dating-App
console.clear()
const allDatingAppUsers = datingAppUsersFromJson.users

// Max ist 18 Jahre alt und sucht alle Frauen zwischen 18 und 25

const zielgruppe = allDatingAppUsers.filter(user => user.age > 18 && user.age <= 25 && user.geschlecht === "weiblich").map(user => user.username)

console.log(zielgruppe)

// Reduce
/*
In 95% aller Fälle benötigt ihr map, find, filter, sort oder eine Kombination daraus.
Ein gutes Beispiel für eine Kombination wäre:

Reduce hingegen benötigt man äußerst selten.
*/

const numbers = [5, 2, 9, 1, 7]

// Summe /avg

const sum = numbers.reduce((zwSumme, aktuelleSumme) => {
    zwSumme = zwSumme + aktuelleSumme
    return zwSumme / numbers.length
}, 0)

// Größte Zahl

const maxNum = numbers.reduce((vorherigeNum, currNum) => Math.max(vorherigeNum, currNum))

console.log(maxNum)