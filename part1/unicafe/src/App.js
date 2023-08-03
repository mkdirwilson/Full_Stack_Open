// import states
import { useState } from "react"



// header component 
const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

// Button component 
const Button = ({handleClick, text}) => {
  return (
    <button onClick = {handleClick}>{text}</button>
  )
}

// FeedbackStats component 
const FeedbackStats = ({feedback, count})=>
{
  return (
    <div>{feedback} {count}</div>
  )
}



// Root of the app 
const App = () =>
{

  // define states
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  // implement the button behaviours of all three feedbacks 
  const handleGoodClick = ()=> setGood(good + 1)

  const handleNeutralClick = ()=> setNeutral(neutral + 1)

  const handleBadClick = ()=> setBad(bad + 1)

  // variable for all feedbacks
  const total = good + neutral + bad;

  // variable to compute the average
  const average = (good - bad) / total || 0

  // compute percentage of positive feedback
  const positive_percentage = (good / total * 100) || 0


  return (
    <>
    <Header text="give feedback"></Header>

    <Button handleClick={handleGoodClick} text="good"/>
    <Button handleClick={handleNeutralClick} text="neutral"/>
    <Button handleClick={handleBadClick} text="bad"/>

    <Header text="statistics"/>

    <FeedbackStats feedback="good" count={good}/>
    <FeedbackStats feedback="neutral" count={neutral}/>
    <FeedbackStats feedback="bad" count={bad}/>
    <FeedbackStats feedback="all" count={total}/>
    <FeedbackStats feedback="average" count={average}/>
    <FeedbackStats feedback="positve" count={positive_percentage + "%"}/>
    </>
  )
}

export default App;
