import Content from "./Content"
import Header from "./Header"
import Total from "./Total"
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1><Header course={course}/></h1>
      <p>
        <Content part={part1} excercise={exercises1}/>
      </p>
      <p>
        <Content part={part2} excercise={exercises2}/>
      </p>
      <p>
        <Content part={part3} excercise={exercises3}/>
      </p>
      <p>Number of exercises <Total total={exercises1 + exercises2 + exercises3}/></p>
    </div>
  )
}

export default App