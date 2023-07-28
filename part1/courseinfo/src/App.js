// Header component 
const Header = (props) => (
  <>
    <h1>{props.course}</h1>
  </>
)

// Part component
const Part = (props) => (
  <>
    <p>{props.name} {props.number}</p>
  </>
)

// Content component 
const Content = (props) =>  (
  <>
    <Part name={props.parts[0].part} number={props.parts[0].num_exercise}/>
    <Part name={props.parts[0].part} number={props.parts[1].num_exercise}/>
    <Part name={props.parts[0].part} number={props.parts[2].num_exercise}/>
  </>
)



// Total coponent 
const Total = (props) => (
  <>
    <p>The total number of exercises is {props.total}</p>
  </>
)

// Root component App
const App = () => {
  const course = 'Half stack application development'

  const parts = [
    {part: 'Fundamentals of React', num_exercise: 10},
    {part: 'Using props to pass data', num_exercise: 7},
    {part: 'State of a component', num_exercise: 14}
  ]


  return (
    <>
      <Header course={course}/>

      <Content parts={parts}/>

      <Total total={parts[0].num_exercise + parts[1].num_exercise + parts[2].num_exercise}/>
    
    </>
  )

}

export default App;
