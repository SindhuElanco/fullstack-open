import { useState} from 'react'
import Display from './Display'
// import Button from './Button'

// import Content from "./Content"
// import Header from "./Header"
// import Total from "./Total"
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   const parts = [
//     {
//       name: part1,
//       exercises: exercises1
//     },
//     {
//       name: part2,
//       exercises: exercises2
//     },
//     {
//       name: part3,
//       exercises: exercises3
//     }
//   ]

//   return (
//     <div>
//       <h1><Header course={course}/></h1>
//       <p>
//         <Content parts={parts}/>
//       </p>
//       <p>Number of exercises <Total total={exercises1 + exercises2 + exercises3}/></p>
//     </div>
//   )
// }

// export default App
//----------------------------------------------------------------------------------------------


// const App = () => {

//   const [counter, setCounter] = useState(0)
//   const [counters, setCounters] = useState({
//     increaseByOne: 0,
//     decreaseByOne: 0
//   })
//   console.log('rendering with counter value', counters)

//   const increasedByOne = () => {
//     console.log('increasing, value before', counters)
//     // setCounter(counter + 1)
//     setCounters({...counters, increaseByOne: counters.increaseByOne + 1})
//   }
//   const decreasedByOne = () => {
//     console.log('decreasing, value before', counters)
//     // setCounter(counter - 1)
//     setCounters({...counters, decreaseByOne: counters.decreaseByOne - 1})
//   }
//   const setToZero = () => {
//     console.log('resetting to zero, value before', counter)
//     setCounter(0)
//   }

//   return (
//     <div>
//       <Display counter={counters.increaseByOne} />
//       <Button onClick={increasedByOne} text='plus' />
//       <Button onClick={decreasedByOne} text='minus' />
//       <Display counter={counters.decreaseByOne} />
//       <Button onClick={setToZero} text='reset' />
//     </div>
//   )
// }
//-------------------------------------------------------------------------------------------------
// const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  // const [allClicks, setAll] = useState([])

  // const [total, setTotal] = useState(0)

  // const handleLeftClick = () => {
  //   setAll(allClicks.concat('L'))
  //   console.log("Left before", left)
  //   const updatedLeft = left + 1
  //   setLeft(updatedLeft)
  //   console.log("Left after", updatedLeft)

  //   setTotal(updatedLeft + right)
  // }

  // const handleRightClick = () => {
  //   setAll(allClicks.concat('R'))
  //   const updatedRight = right + 1
  //   setRight(updatedRight)

  //   setTotal(left + updatedRight)
  // }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>

//       <p>total {total}</p>
//     </div>
//   )
// }

//-------------------------------------------------------------------------------------------------

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    console.log("Left before", left)
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    console.log("Left after", updatedLeft)
    
    // setTotal(updatedLeft + right)
  }
  
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    
    // setTotal(left + updatedRight)
  }


  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}

      <History allClicks={allClicks} />
    </div>
  )
}
export default App