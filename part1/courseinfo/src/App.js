// Header component 
const Header = (props) => (
  <>
    <h1>{props.course.name}</h1>
  </>
)

// Part component
const Part = (props) => (
  <>
    <p>{props.name} : {props.number}</p>
  </>
)

// Content component 
const Content = (props) =>  (
  <>
    <Part name={props.parts[0].name} number={props.parts[0].exercises}/>
    <Part name={props.parts[1].name} number={props.parts[1].exercises}/>
    <Part name={props.parts[2].name} number={props.parts[2].exercises}/>
  </>
)



// Total coponent 
const Total = (props) => (
  <>
    <p>Total number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  </>
)

// Root component App
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <>
      <Header course={course}/>

      <Content parts={course.parts}/>

      <Total parts={course.parts}/>
    
    </>
  )

}

export default App;
