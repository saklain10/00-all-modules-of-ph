const handlePost = () => {
    // console.log("clicked")
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        displayPost(data)
    })
}

const displayPost = (posts) =>{
    // console.log(posts)
    for(const post of posts){
        console.log(post)
        // console.log(post.title)
        const div = document.createElement('div')
        div.classList.add("card")
        div.innerHTML=`
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button>Details</button>
        `
        postContainer.appendChild(div)
    }

}
handlePost()

handleUpdate=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
