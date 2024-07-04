import { useState } from 'react'

import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 30,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    });
  }

  return (
    <>
      <Header />
      <UserInput input={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter duration greater than 0.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
