import { useState } from 'react'
import Button from './components/Button'
import Screen from './components/Screen'
import Footer from './components/Footer'


function App() {
  const button_text = [
    ['AC', '(', '%', '/' ],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['+/-', '0', '.', '=']
  ]

  const [ expression, setExpression ] = useState("")
  const [ result, setResult ] = useState(0)

  const clearScreen = () => {
    setExpression('')
    setResult(0)
  }

  const updateExpression = (e) => {
    let val = e.target.value 
    
    if(val === 'AC'){
      clearScreen()
    }
    else if(val === '='){
      // eval is unsafe, this line is a temporary workaround
      setResult(eval(expression))
    }
    else{
      if(result !== 0) {
        clearScreen()
      } 
      setExpression(`${!isNaN(val) ? `${expression}${val}` : `${expression} ${val} `}`)
    }

    console.log(val)
  }
  return (
    <div className='wrapper'>
      <div className='calc-wrapper'>
        <Screen expression={expression} result={result} />
        <div className="button-wrapper">
          {button_text.map( (row) => (
            <div key={row} className="btn-row">
              {row.map( (t) => (
                <Button key={t} text={t} onClick={updateExpression} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
