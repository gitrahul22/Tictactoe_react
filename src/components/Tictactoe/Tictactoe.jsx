
import React,  { useState } from 'react';
import {useRef} from 'react';
import './Tictactoe.css'
import circ from '../Assets/circle.png'
import cross from '../Assets/cross.png'
let data=["","","","","","","","",""];


const Tictactoe = () => {
  let box1=useRef(null);
let box2=useRef(null);
let box3=useRef(null);
let box4=useRef(null);
let box5=useRef(null);
let box6=useRef(null);
let box7=useRef(null);
let box8=useRef(null);
let box9=useRef(null);

let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];
let [cnt,setCnt] =useState(0);

  let [count,setCount] =useState(0);
  let[lock,setLock]=useState(false);
  let titleRef=useRef(null);
    // count=0;

  const toggle=(e,num)=>{
    if(lock){
      console.log("i was called")
      return 0;
    }
    
      if(count%2===0){
        e.target.innerHTML=`<img src='${circ}'>`;
        setCount(++count);
        data[num]="o";
        setCnt(cnt+1);
      }else{
        e.target.innerHTML=`<img src='${cross}'>`;
        setCount(++count);
        data[num]="x";
        setCnt(cnt+1);
      }
      checkDRW(cnt+1);  
      checkWin();
  }
  const checkDRW=(cnt)=>{
    console.log("I was being called"+cnt);
    if(cnt===9){
      titleRef.current.innerHTML=`Its a Draw`;
      console.log("the draw never lies");
    }
  }
  const  checkWin=()=>{
    if(data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){
      won(data[1]);
      } 
     if(data[3]===data[4]&&data[4]===data[5]&&data[5]!==""){
        won(data[3]);
        } 
    if(data[6]===data[7]&&data[7]===data[8]&&data[8]!==""){
      won(data[7]);
      } 
    if(data[0]===data[3]&&data[3]===data[6]&&data[6]!==""){
      won(data[3]);
    }
    if(data[0]===data[4]&&data[4]===data[8]&&data[8]!==""){
      won(data[4]);
    }
    if(data[1]===data[4]&&data[4]===data[7]&&data[7]!==""){
      console.log("mid-col");
      won(data[4]);
      
    }
    if(data[2]===data[5]&&data[5]===data[8]&&data[8]!==""){
      won(data[5]);
    }
    if(data[2]===data[4]&&data[4]===data[6]&&data[6]!==""){
      won(data[6]);
    }
    
  }
  const won =(winner)=>{
    setLock(true);
    if(winner==="x"){
      titleRef.current.innerHTML=`Congratulation <img src='${cross}'> Wins`
    }
    else if(winner==="o"){
      titleRef.current.innerHTML=`Congratulation <img src='${circ}'> Wins`
    }
  }
  const resetTo=()=>{
    setLock(false);
     data=["","","","","","","","",""];
    titleRef.current.innerHTML=`Tic-Tac-Toe Game using<span>React</span>`;
    box_array.map((e)=>{
      e.current.innerHTML="";
    });
     setCnt(0);
    //  setCount(0);
   console.log(cnt);
    
  }
  return (
    <div>
       <div className="container">
        <div className="title" ref={titleRef}>Tic-Tac-Toe Game using<span>React</span></div>
        <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e)=>toggle(e,0)}></div>
          <div className="boxes" ref={box2}  onClick={(e)=>toggle(e,1)}></div>
          <div className="boxes" ref={box3}  onClick={(e)=>toggle(e,2)}></div>
        </div>
        <div className="row2">
        <div className="boxes" ref={box4}  onClick={(e)=>toggle(e,3)}></div>
          <div className="boxes" ref={box5}  onClick={(e)=>toggle(e,4)}></div>
          <div className="boxes" ref={box6}  onClick={(e)=>toggle(e,5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7}  onClick={(e)=>toggle(e,6)}></div>
          <div className="boxes" ref={box8}  onClick={(e)=>toggle(e,7)}></div>
          <div className="boxes" ref={box9}  onClick={(e)=>toggle(e,8)}></div>
        </div>
        </div>
        <button onClick={()=>resetTo()}>Reset</button>
       </div>
    </div>  
  )
}

export default Tictactoe;