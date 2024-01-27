"use strict";
let profileKu;
profileKu = {
    name: "Fahro Nur Fauzi",
    age: 21,
    isLived: true,
};
console.log({ profileKu });
// FUNCTION
function namaKu() {
    return "Fahro Nur Fauzi";
}
const umurKu = () => 2;
const tambah = (x, y) => {
    return `${x} + ${y} = ${x + y}`;
};
const result = tambah(1, 2);
console.log(result);
const createIntel = (processor) => {
    console.log(`Hasil: ${processor.brand}, ${processor.baseModel}, ${processor.modelName}, ${processor.clockSizes}, ${processor.turboBoost}, ${processor.coreTotal}`);
};
const createAMD = (processor) => {
    console.log(`Hasil: ${processor.brand}, ${processor.baseModel}, ${processor.modelName}, ${processor.clockSizes}, ${processor.precisionBoost}, ${processor.coreTotal}`);
};
const intelCore5 = {
    brand: "Intel",
    baseModel: "Core i5",
    modelName: "i5-2900O1",
    clockSizes: 5,
    coreTotal: 2,
    turboBoost: true,
};
const amdRyzen3 = {
    brand: "AMD",
    baseModel: "Ryzen 3",
    modelName: "r-2202Q2",
    clockSizes: 10,
    coreTotal: 2,
    precisionBoost: true,
};
createIntel(intelCore5);
createAMD(amdRyzen3);
