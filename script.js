const balance=document.getElementById("balance");
const money_plus=document.getElementById("income");
const money_minus=document.getElementById("expense");

const History=document.getElementById("list");

const form =document.getElementById("form")
const text=document.getElementById("text")


const amount=document.getElementById("amount");

let transactions = JSON.parse(localStorage.getItem("transactions") || "[]");

function AddTransaction(e){
    e.preventDefault();
const transactions={
    id:Date.now(),
    text:text.value,
    amount:+amount.value,
}
   
}

