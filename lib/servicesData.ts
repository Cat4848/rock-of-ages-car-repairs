const oilChangeReplacements = ["Oil Change", "Oil Filter Replacement"];
const oilChangeChecks = ["Service Book Stamp", "Service Light Reset"];
const interimReplacements = [...oilChangeReplacements];
const interimChecks = [
  "Battery",
  "Brakes",
  "Coolant Level",
  "Brake Fluid Level"
];
const fullReplacements = [
  ...interimReplacements,
  "Air Filter",
  "Pollen Filter"
];
const fullChecks = [
  ...interimChecks,
  "Lubricate Doors, Bonnet and Boot Hinges",
  "Rust"
];

export interface IService {
  title: string;
  price: string;
  replace: string[];
  check: string[];
}

export const briefServices: IService[] = [
  {
    title: "Oil and Filter Change",
    price: "£135",
    replace: [...oilChangeReplacements],
    check: [...oilChangeChecks]
  },
  {
    title: "Interim Service",
    price: "£150",
    replace: interimReplacements,
    check: [...oilChangeChecks, ...interimChecks]
  },
  {
    title: "Full Service",
    price: "£190",
    replace: [...fullReplacements],
    check: [...fullChecks]
  }
];
