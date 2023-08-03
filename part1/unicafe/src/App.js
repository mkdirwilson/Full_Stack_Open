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

// statisticLine component
const StatisticLine = ({text, value})=> {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  )
}


// FeedbackStats component 
const FeedbackStats = ({good, neutral, bad})=>
{ 
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positivePercentage = (good / total) * 100

  if (total === 0)
  {
    return (
        <p>No feedback given</p>
    )
  }
  return (
    <>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={total}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positivePercentage + " %"}/>
    </>   
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


  return (
    <>
    <Header text="give feedback"></Header>

    <Button handleClick={handleGoodClick} text="good"/>
    <Button handleClick={handleNeutralClick} text="neutral"/>
    <Button handleClick={handleBadClick} text="bad"/>

    <Header text="statistics"/>

    <FeedbackStats good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App;
