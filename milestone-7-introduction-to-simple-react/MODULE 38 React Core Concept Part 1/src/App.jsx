import './App.css'
import ToDo from './todo'

function App() {

const time = 50;

  return (
    <>
      
      <h1>React Core Concept</h1>

      <ToDo task="Learn React." 
      isDone = {true} 
      time={time}></ToDo>
      <ToDo task="Take a shower" isDone = {false}></ToDo>
      <ToDo task="Revise JS." isDone = {true}></ToDo>
      
      {/* 
      <Sports></Sports>
      <Pet></Pet>
      <Country></Country> 
      <Person></Person>
      <Developer name=" Mozumder" tech=" JS"></Developer>
      <Developer name=" Razon" tech=" Python"></Developer>
      <Developer name=" Shabana" tech=" Java"></Developer>
      <Student></Student>
      <Student></Student>
      <Device device=" HP" price="1000"></Device>
      <Player name=" Tamim" runs=" 10000"></Player>
      <Player name=" Mushi" runs=" 12000"></Player>
      <Salami event="Eid-ul-Fiter" amount= "500"></Salami>
      <Salami event="Eid-ul-Adha" amount= "1000"></Salami>
      <Salami event="Graduation" ></Salami> */}
    </> 
  )
}

// const {name, runs}={name: 'Tamim', runs: '100'}
function Player({name, runs}){
return(
  <div className='player'>
      <h3>Name:{name}</h3>
      <h3>Runs:{runs}</h3>
  </div>
)
}
// function Player(props){
//   console.log(props)
// return(
//   <div className='student'>
//       <h3>Name:{props.name}</h3>
//       <h3>Runs:{props.runs}</h3>
//   </div>
// )
// }

function Salami({event, amount=0}){
return(
  <div className='salami'>
  <p>Salami For: {event}</p>
  <p>Amount: {amount}</p>
  </div>
)
}


function Device(props){
  return(
    <>
    <p>Name: {props.device}</p>
    <p>Brand: {props.price}</p>
    </>
  )
}

// const {name, tech}= {name=" Mozumder" tech=" JS"}

function Developer (props){
  console.log(props)
  return (
    <div style={{
      border: "2px solid green",
      borderRadius: "20px",
      marginBottom: "7px"
    }}>
      <h3>Developer:{props.name}</h3>
      <p>Technology:{props.tech}</p>
    </div>
  )
}

function Person(){
  const age = 17;
  const name = "Sajib"

  const personStyle = {
    color: 'red',
    textAlign: "left"
  }
  return (
    <p id='' title='tooltip' style={personStyle}>I am a Person {name} {age}</p>
  )
}

function Student(){
  return (
    <div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

function Pet(){
  return (
    <h1>Pet</h1>
  )
}



function Sports(){
  return (
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Banana</li>
        <li>Orange</li>
      </ul>
      <p>Playing and Loosing</p>
    </div>
  )
}

function Country(){
  return (
    <p>Bangladesh</p>
  )
}


export default App
