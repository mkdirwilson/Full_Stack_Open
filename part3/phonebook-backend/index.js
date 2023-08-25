// import express
const express = require("express")
const cors = require("cors")
const app = express()


// import the morgan middleware for logging request
const morgan = require('morgan')

// To be pars JSON data of request to Javascipt Object
app.use(express.json())


// use the tiny format to log requests
app.use(morgan('tiny'))


// 
app.use(cors())

//
app.use(express.static('build'))


// using custom token as discribed by the morgan docs to log request with HTTP POST
morgan.token('type', (request, response)=>{

  if (request.method == 'POST') {
    return JSON.stringify(request.body)
  }

  return ''
  
})


// using the morgan middleware with the custom token
app.use(morgan(':method :url :status :res[content-length] - :response-time ms:type'))


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


// HTTP GET to fetch a specific person from persons
app.get('/api/persons/:id', (request, response)=>{
  // Get the id from the url path
  const id = Number(request.params.id)

  // find the person with that id
  const person = persons.find(person=>person.id === id)

  // if there is a person respond with that persn or throw in  not found status 404
  person ? response.json(person) : response.status(404).end()

  
  // The above is the same as this below
  // if (person) {
  //   response.json(person)
  // }

  // else {
  //   response.status(404).end()
  // }
})


// HTTP delete request to delete a person from the phone book

app.delete('/api/persons/:id', (request, response)=>{
  // Find the id number 
  const id = Number(request.params.id)

  // remove the person with that id by filtering the persons
  persons = persons.filter(person=>person.id !== id)

  // response with a no-content status
  response.status(204).end()

})


// Helper function to generate id

const generateId = () => {
  const min = persons.length 
  const max = 3001

  const maxId = Math.floor(Math.random() * (max - min) + min)

  return maxId + 1
}


// HTTP post to add new entry to the phonebook
app.post('/api/persons', (request, response)=>{
  // iniitialise body with the body of the request
  const body = request.body 

  // return if name of the body is empty and exit with a 400 status which is a bad request status 
  if (!(body.name) || !(body.number)) {
    return response.status(400).json({
      error: 'name or number is missing'
    })
  }

  // returns a conflict status 409 if name already is in the list of persons
  if (persons.some(person=>person.name === body.name))
  {
    return response.status(409).json({
      error: 'name must be unique'
    })
  }

  // populate the person object
  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  
  // add the new person 
  persons.concat(person)

  // respond with the object of the new person
  response.json(person)

})


// Run our server on a specified port and console log server is running 
const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`)
})