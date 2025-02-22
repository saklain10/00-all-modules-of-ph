function sendProposal(heroBio, patriBio) {
    
    if (typeof heroBio ==="object" && typeof patriBio ==="object" && !Array.isArray(heroBio)) {
        if (heroBio.district===patriBio.district) {
            return "proposal done"
        }
        else {
            return 'NOOOOOOOOOOO'
        }
    } else {
       return "invalid input"
    }
    
}

const heroBioData = {
    name: "hero alom",
    age: 20,
    district: "dhaka",
    fatherName: "Omuk",
    email:"h@gmail.com"
}

const henaBioData = {
    name: "hena",
    age: 20,
    district: "dhaka",
    fatherName: "tomuk",
    email:"hena@gmail.com"
}

const status = sendProposal(heroBioData, henaBioData);
console.log(status)



