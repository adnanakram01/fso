import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const FindMax = (props) => {
  let max = props.vote[0]
  let pos = 0
  for(let i = 0; i < props.anecdotes.length; i++) {
    if (props.vote[i] > max) {
      max = props.vote[i]
      pos = i
    }
  }
  if (max === 0) {
    return (
      <p>No votes!</p>
    )
  }
  return (
    <div>
    <p>{props.anecdotes[pos]}</p>
    <p>has {max} votes</p>
    </div>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)

  const [vote, setVote] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0})

  const voteCount = () => {
    setVote({...vote, [selected]: vote[selected]+1})
  }

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <Button handleClick={voteCount} text="vote" />
      <Button handleClick={nextAnecdote} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <FindMax vote={vote} anecdotes={anecdotes} />
    </div>
  )

}

export default App