import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useEffect, useState } from "react";
import personServices from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setFilter] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertStyle, setAlertStyle] = useState({});

  // useEffect
  useEffect(() => {
    personServices.getAll().then((initialPerson) => setPersons(initialPerson));
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const showAlert = (message, style) => {
    setAlertMessage(message);
    setAlertStyle(style);
    setTimeout(() => {
      setAlertMessage(null);
    }, 4000);
  };

  const addPerson = (event) => {
    event.preventDefault();
  
    const personToUpdate = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
  
    if (personToUpdate) {
      const confirmed = window.confirm(
        `${personToUpdate.name} is already added to the phonebook, replace the old number with a new number?`
      );
  
      if (confirmed) {
        const updatedPerson = { ...personToUpdate, number: newNumber };
  
        personServices
          .update(updatedPerson, updatedPerson.id)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== updatedPerson.id ? person : returnedPerson
              )
            );
            showAlert(`Changed ${updatedPerson.name}'s number`, {
              fontSize: 16,
              color: "green",
              backgroundColor: "lightGrey",
              padding: 10,
              marginBottom: 10,
              border: "solid 3 green",
              borderRadius: 5,
            });
          })
          .catch((error) => {
            showAlert(
              `Information on ${personToUpdate.name} has already been deleted from the server`,
              {
                fontSize: 16,
                fontWeight: "bold",
                color: "red",
                backgroundColor: "lightGrey",
                padding: 10,
                marginBottom: 10,
                border: "solid 3 red",
                borderRadius: 5,
              }
            );
          });
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
  
      personServices
        .create(newPerson)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          showAlert(`Added ${newPerson.name}`, {
            fontSize: 16,
            color: "green",
            backgroundColor: "lightGrey",
            padding: 10,
            marginBottom: 10,
            border: "solid 3 green",
            borderRadius: 5,
          });
        })
        .catch(error=>{
          showAlert(error.response.data.error, 
            {
              fontSize: 16,
              fontWeight: "bold",
              color: "red",
              backgroundColor: "lightGrey",
              padding: 10,
              marginBottom: 10,
              border: "solid 3 red",
              borderRadius: 5,
            } )
        })
    }
  
    // Reset the state here, outside of the if-else block
    setNewName("");
    setNewNumber("");
  };

  const handleDeletePerson = (id) => {
    const person = persons.find((person) => person.id === id);
    const confirmDelete = window.confirm(`Delete ${person.name}`);

    if (confirmDelete) {
      personServices
        .remove(id)
        .then(() => setPersons(persons.filter((person) => person.id !== id)))
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const numbersToShow =
    newFilter.length > 0
      ? persons.filter((person) =>
          person.name.toLowerCase().startsWith(newFilter.toLowerCase())
        )
      : persons;

  return (
    <>
      <h2>Phonebook</h2>
      <Notification alertMessage={alertMessage} alertStyle={alertStyle} />
      <Filter filterHandler={handleFilterChange} newFilter={newFilter} />

      <h3>Add a new contact</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons numbersToShow={numbersToShow} handleDeletePerson={handleDeletePerson} />
    </>
  );
};

export default App;
