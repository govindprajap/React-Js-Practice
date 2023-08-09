import logo from './logo.svg';
import './App.css';
import Card from './Card';
import ImaData from './ImaData';
import { useState } from 'react';

// let currTime = new Date();
// currTime = currTime.getHours();
// let greating = '';
// const csstyle = {}
// if(currTime >= 1 && currTime < 12){
//   greating = 'Good Moring';
//   csstyle.color = 'green';

// }else if(currTime >=12 && currTime<20){
//   greating = 'Good Afternoon';
//   csstyle.color = 'orange';
// }else{
//   greating = 'Good eveing';
//   csstyle.color = 'black';
// }


function App() {
  // const [Inserment, setIncrement] = useState(0);
  
  // const Incre = ()=>{
  //   setIncrement(Inserment+1)
  // }
  // const [decrement, setDecrement] = useState(0);
  // const Decrem = ()=>{
  //   setDecrement(decrement-1);
  // }
  
  
  return (
    <>
     {/* <h1>Hello Govind <span style={csstyle}>{greating}</span></h1> */}
     {/* <Card imgsrc = "https://cdn.pixabay.com/photo/2022/12/14/15/08/serie-7655567_1280.jpg"
     card_infor = "A Netflix Original Series"
     titel = "Dark"
     button = "Watch Now"/> */}
     {/* <Card imgsrc = {ImaData[0].imgsrc}
           card_infor = {ImaData[0].card_infor}
           titel = {ImaData[0].titel}
           button = {ImaData[0].button}/>
      <Card imgsrc = {ImaData[0].imgsrc}
           card_infor = {ImaData[0].card_infor}
           titel = {ImaData[0].titel}
           button = {ImaData[0].button}/>
      <Card imgsrc = {ImaData[0].imgsrc}
           card_infor = {ImaData[0].card_infor}
           titel = {ImaData[0].titel}
           button = {ImaData[0].button}/>           */}


           {/* <h1>{Inserment}</h1>
           <button onClick={Incre}>Clicked Me</button>
           <h1>{decrement}</h1>
           <button onClick={Decrem}>Clicked Me</button> */}
     
     

    </>
  );
}

export default App;
