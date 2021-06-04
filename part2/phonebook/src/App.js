import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Filter = (props) => {
    return (
        <form>
          <div>
          filter show with: <input value={props.checkName} onChange={props.handleChange} />
          </div>
        </form>
    )
}

const Form = (props) => {
  return (
        <form onSubmit={props.addNewName}>
        <div>
          name: <input value={props.newName} onChange={props.handleNewName} />
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        </form>
  )
}

const Persons = ({namesToShow}) => {
  return (
    <div>
      {namesToShow.map(person => {
        return <ul>
          <li>{person.name} {person.number}</li>
        </ul>
      })}
    </div>
  )
}

const App = () => {


  const [persons, setPersons] = useState([])

  const hook = () => {
    axios.get('http://localhost:3001/persons').then(res => {
      setPersons(res.data)
    })
  }

  useEffect(hook, [])

  const names = persons.map(person => person.name)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [checkName, setCheckName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const namesToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(checkName))

  const addNewName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    if(names.includes(newName))
      alert(`${newName} is already there in the phonebook!`)
    else
      setPersons(persons.concat(nameObject))
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleChange = (event) => {
    setCheckName(event.target.value)
    setShowAll(false)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter checkName={checkName} handleChange={handleChange} />
      <Form addNewName={addNewName} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} />
      <h2>Numbers</h2>
      <Persons namesToShow={namesToShow}/>
    </div>
  )

}

export default App;
