let tastlist=[];
let elementlist=document.getElementById("tasklist");

let name=document.getElementById("name");
let amount=document.getElementById("amount");


let income=document.getElementById("Income");
let expence=document.getElementById("Expense");

let btn =document.getElementById("btn");
let list=document.getElementById("list");
const balance=[];



function GetData(){
    let name=document.getElementById("name").value;
    console.log(name);
    let amount=document.getElementById("amount").value;
console.log(amount);
}
if(name=salary || amount>=3000){
    
    DisplayPrice(amount);

}


 function DisplayPrice(amount){
balance.push(value);
  RenderTask();

 }


function RenderTask(){
    balance.innerHTML="";
    balance.foreach(item=>{
        let l1=document.createElement("li");
        l1.innerHTML=value;

    });
}