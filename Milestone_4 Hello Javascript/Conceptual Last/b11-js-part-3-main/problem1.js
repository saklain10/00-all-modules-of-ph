function bazarHishab(totalMoeny, morich, mach, shobji) {
    const cost = morich + mach + shobji;
    const sum = totalMoeny - cost;
    return sum;
}

const totalMoeny = 500;
const morich = 100;
const fish = 200;
const shobji = 50;

const restMoney = bazarHishab(totalMoeny, morich, fish, shobji);

console.log(restMoney)




