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
    <Part name={props.parts[0].name} number={props.parts[0].exercises}/>
    <Part name={props.parts[0].name} number={props.parts[1].exercises}/>
    <Part name={props.parts[0].name} number={props.parts[2].exercises}/>
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
  const course = 'Half Stack application development'
  
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <>
      <Header course={course}/>

      <Content parts={[part1, part2, part3]}/>

      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    
    </>
  )

}

export default App;
