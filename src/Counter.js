import React, { useState } from 'react'
import './Counter.css'
function Counter(props) {

const [amount,setAmount] = useState('')
const [type,setType] = useState('')


const today = new Date()
const timestamp= today.getFullYear()+'-'+today.getMonth()+"-"+today.getDay()+"T"+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+"."+today.getMilliseconds()+"Z";


const addTransaction = () => {
props.addTransaction({amount:Number(amount),date:timestamp,id:Date.now(), type})
setAmount('')
}
  return (
  <div className='form-control'>
      <h3>Balance:{props.balance}</h3>
      <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}/><br/>
      <button onClick={addTransaction} onClickCapture={() => setType('add')}>Add</button>
      <button onClick={addTransaction} onClickCapture={()=>setType('remove')}>Remove</button>
  </div>
  )
}

export default Counter
