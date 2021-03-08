import React,{useContext} from 'react';
import Transaction from './Transaction';
import {GlobalContext} from '../context/GlobalState';

export default function TransactionList(){
    const {transactions} = useContext(GlobalContext);
    console.log(transactions);
    return(
        <>
           <h3>Historico</h3>
            <ul id="list" className="list">
                {transactions.map(transaction=>(
                     <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </>
    )
}