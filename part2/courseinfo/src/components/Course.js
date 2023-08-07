
const Header = ({name})=><h2>{name}</h2>

const Part = ({part})=>{
  return (
    <>
      <p>{part.name} {part.exercises}</p>
    </>
  )
}

const Content = ({parts})=>{
  return (
    <>
    {parts.map(part=>
      <Part key={part.id} part={part}/>
     )}
    </>
  )
}

const TotalExercises = ({course})=> {
  return (
    <p><strong> total of 
      {course.parts.reduce((sum, part)=>sum + part.exercises, 0)} exerxises
    </strong>
    </p>
  )
}

const Course =({course})=>{
  return (
    <article>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <TotalExercises course={course}/>
    </article>
  )
    
}

export default Course