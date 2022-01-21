import React, { useState } from 'react'
import './Counter.css'
function Counter(props) {

const [amount,setAmount] = useState('')
const [type,setType] = useState('add')

const addTransaction = () => {
props.addTransaction({amount:Number(amount) ,id:Date.now(), type})
setAmount('')
}

  return (
   
  <div className='form-control'>
      <h3>balance:{props.balance}</h3>
      <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}  />
      <button onClick={addTransaction}>Add</button>
      <button onClick={addTransaction} onClickCapture={()=>setType('remove')}>Remove</button>
    </div>
   
  
  )
}

export default Counter
