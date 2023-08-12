
const Person = ({person, handleDeletePerson}) => {
      return (
        <p>
          {person.name} {person.number} <button onClick={()=>handleDeletePerson(person.id)}>delete</button>
        </p>
      )
      
    }


const Persons = ({numbersToShow, handleDeletePerson}) => {
  return (
    <>
      {numbersToShow.map((person)=>
        <Person key={person.id} person={person} handleDeletePerson={handleDeletePerson}/>
      )}
    </>
  )
}

export default Persons