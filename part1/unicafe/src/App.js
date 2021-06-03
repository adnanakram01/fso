import React, { useState } from 'react'

const Button = (props) => {

  return (
    <button onClick={props.handleClick}>{props.name}</button>
  )

}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {

  let all = props.good + props.bad + props.neutral
  let average = (props.good - props.bad) / all

  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
    <h1>Statistics</h1>
    <table>
    <tbody>
    <Statistic text="good" value={props.good} />
    <Statistic text="neutral" value={props.neutral} />
    <Statistic text="bad" value={props.bad} />
    <Statistic text="all" value={all} />
    <Statistic text="average" value={average} />
    <Statistic text="positive" value={(props.good / all) * 100 + ' %'} />
    </tbody>
    </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const sg = () => setGood(good + 1)
  const sb = () => setBad(bad + 1)
  const sn = () => setNeutral(neutral + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={sg} name="good" />
      <Button handleClick={sn} name="neutral" />
      <Button handleClick={sb} name="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App;
