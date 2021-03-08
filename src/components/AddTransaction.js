import React, {useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export default function AddTrasaction(){
    const { addTransaction } = useContext(GlobalContext);
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id:Math.floor(Math.random()* 100000000),
            text,
            amount:+amount,
        }

        addTransaction(newTransaction);
    }

    return(
        <>
            <h3>Adicionar transação</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Valor <br />
                    (Negativo - despesa, Positivo - Renda)</label
                >
                <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}