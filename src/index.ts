// TIPE DATA
type ProfileType = {
  name: string;
  age: number;
  isLived: boolean;
};

let profileKu: ProfileType;

profileKu = {
  name: "Fahro Nur Fauzi",
  age: 21,
  isLived: true,
};

console.log({ profileKu });

// FUNCTION
function namaKu(): string {
  return "Fahro Nur Fauzi";
}

const umurKu = (): number => 2;

const tambah = (x: number, y: number): string => {
  return `${x} + ${y} = ${x + y}`;
};

const result = tambah(1, 2);
console.log(result);

// Interface
interface IProcessor {
  brand: string;
  baseModel: string;
  modelName: string;
  clockSizes: number;
  coreTotal: number;
}

interface Intel extends IProcessor {
  turboBoost: boolean;
}

interface AMD extends IProcessor {
  precisionBoost: boolean;
}

const createIntel = (processor: Intel): void => {
  console.log(
    `Hasil: ${processor.brand}, ${processor.baseModel}, ${processor.modelName}, ${processor.clockSizes}, ${processor.turboBoost}, ${processor.coreTotal}`
  );
};

const createAMD = (processor: AMD): void => {
  console.log(
    `Hasil: ${processor.brand}, ${processor.baseModel}, ${processor.modelName}, ${processor.clockSizes}, ${processor.precisionBoost}, ${processor.coreTotal}`
  );
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
