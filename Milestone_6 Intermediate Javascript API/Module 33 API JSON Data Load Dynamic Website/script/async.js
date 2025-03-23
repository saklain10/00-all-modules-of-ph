// const handleUser = () =>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data=>console.log(data))
//     .catch(error=>console.log("error dhorci", error))
// }
// handleUser() 

const handleUser2 = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.jon();
        console.log(data)
    }
    catch {
        console.log("Error Occoured")
    }
}
handleUser2()
