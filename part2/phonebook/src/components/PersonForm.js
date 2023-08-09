const PersonForm = ({addPerson, newName, handlePersonChange, newNumber, handleNumberChange}) => {
  
  return (
    <>
        <form onSubmit={addPerson}>
          <p>
             name: <input onChange={handlePersonChange} value={newName}  placeholder="Enter name..." ></input>
          </p>

          <p>
            number: <input onChange={handleNumberChange} value={newNumber} placeholder="Enter number..." ></input>
          </p>

          <p>
            <button type="submit">add</button>
          </p>
         </form>
    </>
  )
}

export default PersonForm