// import express
const express = require("express")
const app = express()

// To be pars JSON data of request to Javascipt Object
app.use(express.json())


// initialize our phonebook persons
let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

// HTTP GET to fetch the phone persons
app.get('/api/persons', (request, response)=>{
  response.json(persons)
})


// HTTP GET to fetch the info page
app.get('/info', (request, response)=>{
  
  const currentDate = new Date()
  const numEntries = Math.max(...persons.map(person=>person.id))

  response.send(`
  <p>Phonebook has infor for ${numEntries} people</p>
   <p> ${currentDate}</p>
   `)
})

// Run our server on a specified port and console log server is running 
const PORT = 3001

app.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`)
})