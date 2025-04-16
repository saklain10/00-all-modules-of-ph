import Counter from './counter'
import Batsman from './batsman'
import './App.css'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'
import Posts from './Posts'
import Players from './players'

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

// const fetchFriends = async() =>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/users")
//   return res.json();
// }

// const fetchPosts = async() =>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//   return res.json();
// }

function App() {
  // const friendsPromise = fetchFriends()
  // const postPromise = fetchPosts();
  function handleClick() {
    alert('I am clicked.')

  }

  const handleClick3 = () => {
    alert("clicked 3")
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5
    alert(newNum)
  }

  return (

    <>

      <h3>Vite + React</h3>
      {/* <Suspense fallback={<h4>Posts are coming......</h4>}>
      <Posts postPromise={postPromise}></Posts>

      </Suspense> */}


{/* 
      <Suspense fallback={<h3>Loading....</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends coming for treat...</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      <Players></Players>

      <Batsman></Batsman>

      <Counter></Counter>

      {/* <button onClick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2() { alert("clicked 2") }}>Click Me 2</button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => alert("click 4")}>Click me 4</button>
      {/* wrap function */}
      <button onClick={() => handleAdd5(7)}>Click Add 5</button>




    </>
  )
}

export default App
