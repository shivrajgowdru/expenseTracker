import Counter from './Counter'
import Output from './Output'
import './Demo.css'
import { useEffect, useState } from 'react'


const Demo = (props) => {

const [transaction,setTransaction] = useState([])
const [balance,setBalance] = useState(0)
const [total,setTotal] = useState([transaction])

const addTransaction = (payload) => {
  const transactionArray = [...transaction];
  transactionArray.push(payload);
  setTransaction(transactionArray)
}
 
const calBalance = () => {
  let bal=0;
  transaction.map((payload) => {
   return (payload.type==='add'? bal=bal+payload.amount : bal=bal-payload.amount)
  })
  setBalance(bal)
}

const disTotal = () => {
 transaction.map((payload) => {
   return(
     console.log(payload),
     console.log(balance)
   )
 })
}
console.log(total)
useEffect(()=>{
  calBalance()
  disTotal()
},[transaction])


  return (
    <div className="tracker">
    <h2>Expense Tracker - Basic</h2>
      <Counter addTransaction={addTransaction} balance={balance}/>
      <Output total={total}/>
    </div>
  )
}
export default Demo