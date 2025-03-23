const loadUser = () => {
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(response => response.json())
     .then(data => {
        showUser(data)
     })

    // const showUser =(users) =>{
    //     // console.log(users)
    //     for(let i = 0; i<users.length; i++){
    //         const user = users[i]
    //         console.log(user)
    //     }
    // }

    const showUser = (users) =>{
        const userContainer = document.getElementById('users')
        for(const user of users){
            console.log(user.name)
            // console.log(user.id)
            const li = document.createElement("li")
            li.innerText = user.name
            userContainer.appendChild(li)
        }
    }

} 