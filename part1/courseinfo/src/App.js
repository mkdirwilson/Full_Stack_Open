// Header component 
const Header = (props) => (
  <>
    <h1>{props.course}</h1>
  </>
)

// Content component 
const Content = (props) =>  (
  <>
    <p>{props.part} {props.num_exercise}</p>
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

  const courseinfo = [
    {part: 'Fundamentals of React', num_exercise: 10},
    {part: 'Using props to pass data', num_exercise: 7},
    {part: 'State of a component', num_exercise: 14}
  ]


  return (
    <>
      <Header course={course}/>

      <Content part={courseinfo[0].part} num_exercise={courseinfo[0].num_exercise}/>
      <Content part={courseinfo[1].part} num_exercise={courseinfo[1].num_exercise}/>
      <Content part={courseinfo[2].part} num_exercise={courseinfo[2].num_exercise}/>

      <Total total={courseinfo[0].num_exercise + courseinfo[1].num_exercise + courseinfo[2].num_exercise}/>
    
    </>
  )

}

export default App;
