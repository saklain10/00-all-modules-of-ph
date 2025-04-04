function removeActiveButton() {
    const buttonsActive = document.getElementsByClassName("active");
    // console.log(buttonsActive);
    for (let butn of buttonsActive) {
        butn.classList.remove("active")
    }
}

function loadButtons() {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((data1) => displayData(data1.data))
}

function loadWords() {
    fetch("https://openapi.programming-hero.com/api/words/all")
        .then((response) => response.json())
        .then((data2) => displayLesson(data2.data))

}

function showSpinner() {
    document.getElementById("spinner-container").style.display = "flex";
}

function hideSpinner() {
    document.getElementById("spinner-container").style.display = "none";
}

const loadLessonWords = (level_no) => {
    showSpinner();
    const link = `https://openapi.programming-hero.com/api/level/${level_no}`
    console.log(link)

    fetch(link)
        .then((res) => res.json())
        .then((data3) => {
            removeActiveButton();
            const clickedLessonButton = document.getElementById(`btn-${level_no}`);
            clickedLessonButton.classList.add("active")
            // console.log(clickedLessonButton)
            displayLesson(data3.data)
            hideSpinner()
        })

        .catch((error) => {
            
            hideSpinner();
        });

}

const loadDetailsWord = (detailsId) => {
    console.log(detailsId)
    const link2 = `https://openapi.programming-hero.com/api/word/${detailsId}`;
    fetch(link2)
        .then(res => res.json())
        .then(data4 => displayDetails(data4.data))
}


const displayDetails = (data) => {
    console.log(data)
    document.getElementById("word_details").showModal();
    const detailsContainer = document.getElementById("details-container");

    let meaningTxt = data.meaning;
    if (!meaningTxt) {
        meaningTxt = "অর্থ পাওয়া যায়নি";
    }

    let synonymShowing = "";
    if (data.synonyms && data.synonyms.length > 0) {
        synonymShowing = data.synonyms.map(synonym => `<button class="btn btn-soft">${synonym}</button>`).join(" ")
    }


    detailsContainer.innerHTML = `
    <h1 class="text-2xl mb-8">${data.word}(<i class="fa-solid fa-microphone"></i> :${data.pronunciation})</h1>
                        <h2 class="font-bold">Meaning</h2>
                        <p class="mb-6">${meaningTxt}</p>
                        <h2 class="font-bold">Example</h2>
                        <p class="mb-6">${data.sentence}</p>
                        <h2 class="font-bold mb-1">সমার্থক শব্দগুলো হলো</h2>
                        ${synonymShowing}
    `

}



function displayData(dataCat) {
    const learnButtonContainer = document.getElementById("learn-button-container")
    for (let dat of dataCat) {


        // console.log(dat)

        const dataDiv = document.createElement("div");
        dataDiv.innerHTML = `
    <button id="btn-${dat.level_no}" onclick="loadLessonWords(${dat.level_no})" class="btn btn-outline btn-primary w-32 hover:bg-blue-700 hover:text-white"><img src="./assets/fa-book-open.png" alt=""> Lesson - ${dat.level_no}</button>
    `;
        learnButtonContainer.append(dataDiv)
    }
}

const displayLesson = (lessons) => {
    const wordsContainer = document.getElementById("words-container");
    wordsContainer.innerHTML = "";

    if (lessons.length == 0) {
        wordsContainer.innerHTML = `
        <div class="bg-red-50 flex flex-col rounded text-center justify-center items-center h-40 w-auto my-8 col-span-full">
                    <img src="./assets/alert-error.png" alt="">
                    <p class="text-sm">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                    <p class="font-bold text-3xl mt-5">নেক্সট Lesson এ যান</p>
                </div>
        `
        return;
    }

    lessons.forEach((lesson) => {
        // console.log(lesson);
        let meaningText = lesson.meaning;
        if (!meaningText) {
            meaningText = "অর্থ নেই";
        }


        const lessonCard = document.createElement("div");
        lessonCard.innerHTML = `
        <div class="bg-white rounded shadow-sm flex flex-col gap-10 w-full h-[300px] hover:bg-blue-50">
            <div class="flex flex-col gap-5 items-center mt-6">
                <h1 class="font-semibold text-2xl">${lesson.word}</h1>
                <p class="font-semibold">Meaning / Pronunciation</p>
                <h2 class="text-xl p-2 font-bold text-center">${meaningText} / ${lesson.pronunciation}</h2>
            </div>
            <div class="flex justify-between items-center text-center mt-7 m-4">
                <div onclick=loadDetailsWord(${lesson.id}) class="bg-blue-100 rounded-sm p-2 px-3 hover:bg-blue-500 hover:text-white">
                    <i class="fa-solid fa-circle-info"></i>
                </div>
                <div class="bg-blue-100 rounded-sm p-2 px-3 ">
                    <i class="fa-solid fa-volume-high"></i>
                </div>
            </div>
        </div>
        `;

        wordsContainer.append(lessonCard);

        
    });
};


loadButtons()
// loadWords()

