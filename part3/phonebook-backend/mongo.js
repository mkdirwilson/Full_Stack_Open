// // import the mongoose library
// const mongoose = require("mongoose")

// // if the password is not passed as an argument or more than argument are passed
// if (process.argv.length < 3) {
//   console.log('give password as argument')
//   process.exit(1)
// }


// //get the password, name and number of the phonebook entry the user will enter

// const password = process.argv[2]
// const name = process.argv[3]
// const number = process.argv[4]

// // url for the databse with the name of the database
// const url =
//   `mongodb+srv://mkdirwilson:${password}@cluster0.w91ghym.mongodb.net/phoneBook?retryWrites=true&w=majority`


// mongoose.set('strictQuery',false)
// mongoose.connect(url)

// // defining a person schema and the matching model
// const personSchema = new mongoose.Schema({
//   name: String,
//   number: String
// })

// const Person = mongoose.model('Person', personSchema)

// if (name && number) {
//   const person = new Person({
//     name: name,
//     number: number
//   })

//   person.save().then(result=>{
//     console.log(`added ${name} ${number} to phonebook`)
//     mongoose.connection.close()
//   })
  
// }

// else {
//   Person.find({}).then(result=>{
//     console.log('phonebook:')
//     result.forEach(person=>{
//       console.log(person.name, person.number)
//     })
//     mongoose.connection.close()
//   })
// }



