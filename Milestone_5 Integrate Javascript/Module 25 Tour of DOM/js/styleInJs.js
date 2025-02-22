const sections = document.querySelectorAll('section');
// console.log(sections)

for (const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray'
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center')
placesContainer.classList.remove('large-text')




//some notes
// <!-- placesContainer.childNodes[3].childNodes[5].nextSibling
// <li class=​"important-placess">​…​</li>​


// const placesUL = document.getElementById('#places-container ul')
// placesUL
// placesUL
// <!-- <ul>​…​</ul>​ -->
// -->