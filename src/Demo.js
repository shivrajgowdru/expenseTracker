import Counter from './Counter'
import Output from './Output'
import './Demo.css'
import { useEffect, useState } from 'react'


const Demo = (props) => {

const [transaction,setTransaction] = useState([])
const [balance,setBalance] = useState('')


  const addTransaction = (payload) => {
  const transactionArray = [...transaction];
  transactionArray.push(payload);
  setTransaction(transactionArray)
  }

      const calBalance = () => 
      {
      let bal=0;
      transaction.map((payload) => {
      return (payload.type==='add'? bal=payload.amount + bal : bal=bal - payload.amount)
                                   })
              setBalance(bal)
      }
   useEffect(()=>{
     calBalance()
  },[transaction])

  return (
    <div className="tracker">
    <p className='title'>Expense Tracker - Basic</p>
      <Counter addTransaction={addTransaction} balance={balance}/>
      <Output  transaction={transaction}/>
    </div>
  )
}
export default Demo