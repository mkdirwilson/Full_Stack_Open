import { useState } from "react"


// Header component 

const Header = (props) => {
  return (
    <>
      <h1>{props.text}</h1>
    </>
  )
}

// DisplayAnecdote component 
const DisplayAnecdote = ({anecdote, selected, votes})=> {
  return (
    <>
      <p>{anecdote[selected]}</p>
      <p>Has {votes} votes</p>
    </> 
  )
}


// Button component 
const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}


// Root App component 
const App = ()=> {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setVote] = useState(Array(anecdotes.length).fill(0))

  // zero filled array of defined length
  

  // Remember that the correct way of updating state stored in complex data structures like objects and arrays is to make a copy of the state and update it
  
  const castVote = ()=> {
    const copy = [...points]
    copy[selected] += 1
    setVote(copy)
  }

  // compute random number
  const randomIndex = ()=> {
    const randNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(randNum)
  }

  // find the index of the maximum anecdote
  const IndexOfMax = points.indexOf(Math.max(...points))

  
  return (
    <>
      <Header text="Anecdote of the day"/>
      <DisplayAnecdote anecdote={anecdotes} selected={selected} votes={points[selected]}/>
      <Button handleClick={castVote}  text="vote"/>
      <Button handleClick={randomIndex} text="next anecdote"/>
      <Header text="Anecdote with most votes"/>
      <DisplayAnecdote anecdote={anecdotes} selected={IndexOfMax} votes={points[IndexOfMax]}/>
    </>
  )
}

export default App;
