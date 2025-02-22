// function bazaHisab(totalMoney, morich,mach,shobji){
//     const cost = morich+mach+shobji;
//     const sum = totalMoney - cost
//     return sum;
// }

// const total = (500, 100, 200,50)
// console.log(total)


function findHena(list) {
    let temp = [];

    for (let i = 0; i < list.length; i++) {
        const patriName = list[i]
        if(patriName.includes("h")){
            temp.push(patriName)
        }
    }
    return temp;

}


const partiList = ["rahima", "sokina", "borsha", "apa", "morjina", "reshma", "karishma", "hena"]

const newPatriList = findHena(partiList);
console.log(newPatriList)