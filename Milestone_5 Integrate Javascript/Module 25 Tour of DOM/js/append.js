// 1.Where to add
const placesList = document.getElementById('places-list')
// console.log(placesList)
// 2.what to aded
const li = document.createElement('li');
li.innerText = 'paharToli bon';

// 3.add the child
placesList.appendChild(li)


// // ////   ADDING A WHOLE SECTION //////
// 1.where to add
const mainContainer = document.getElementById('main-container')
// console.log(mainContainer)
//2. what to be added
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = "My Food List"
section.appendChild(h1)

const ul = document.createElement('ul')
const li1 = document.createElement('li')
li1.innerText = 'biriyani'
ul.appendChild(li1)
const li2 = document.createElement('li')
li2.innerText = 'mutton'
ul.appendChild(li2)
const li3 = document.createElement('li')
li3.innerText = 'chicken fry'
ul.appendChild(li3)
section.appendChild(ul)

mainContainer.appendChild(section)


//another way
//set HTML directly
const sectionDress = document.createElement('section')
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
<li>t-shirt</li>
<li>lungi</li>
<li>sando-gangi</li>
</ul>
`

mainContainer.appendChild(sectionDress)