import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const arr = new Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  console.log('selected', selected)

  const [votesState, setVotesState] = useState(arr)

  const handleVote = () => {
    const copy = [...votesState]
    copy[selected] += 1
    setVotesState(copy)
    console.log('votesState', votesState)
  }
  //votestate = [1,3,0,5,2]
  // votestateindex = [0,1,2,3,4]
  const max = Math.max(...votesState) //has the max in the votestate array
  const indexanecdote = votesState.indexOf(max) //gets the index of the max value of the voteState array
  console.log('max', votesState.indexOf(max))

  return (
    <div>
      {anecdotes[selected]} <br/> has {votesState[selected]} votes
      <br/>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>
        next anecdote
      </button>
      <button onClick={handleVote}>Vote</button>
      <br/>
      <h2>Anecdote with most votes</h2>
      <p>{max == 0 ? '' : anecdotes[indexanecdote]} </p> 
      {/* if the value of max is 0 that is when the page loads or when no anecdotes is voted, the anecdotes with most votes should be blank */}


    </div>
  )
}

export default App