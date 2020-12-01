 const fs = require('fs')
 const book={
     title:"Ego is the enemy",
     author:"Ryan Holiday"
 }
 const bookJson=JSON.stringify(book)
 console.log(bookJson)
const bookParse= JSON.parse(bookJson)
console.log(bookParse.title)

const dataBuffer = fs.readFileSync("1-json.json")
const dataJSON= dataBuffer.toString()
const user = JSON.parse(dataJSON)
user.name= "Thales"
user.age= "19"
const dataUser= JSON.stringify(user)
fs.writeFileSync("1-json.json",dataUser)
const dataBuffer2 =fs.readFileSync("1-json.json")
const dataJSON2 = dataBuffer2.toString()
const user2 = JSON.parse(dataJSON2)
console.log(user2)
