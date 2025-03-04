// Object types with
type Role = {
  role: "manager" | "founder";
};
type Permissions = {
  permissions: "admin" | "user";
};

type User = Role & Permissions;

const user: User = {
  role: "founder",
  permissions: "admin",
};

console.log("userObject", user);

//Object types with Interfaces

interface Animal {
  species: string;
  breed?: string;
  age: number;
  weight?: number;
  name: string;
}

const animal: Animal = {
  species: "dog",
  age: 12,
  name: "Amaya",
  breed: "Malinois",
  weight: 22,
};

interface Cars {
  color: string;
  wheels: number;
  transmission: "manual" | "automatic";
  fuelType: "diesel" | "petrol";
  startEngine: () => string;
}

const car: Cars = {
  color: "White",
  wheels: 4,
  transmission: "manual",
  fuelType: "diesel",
  startEngine: function () {
    return `Start the engine`;
  },
};

// Get object keys
const keys = Object.keys(car);

// Get Object Values
const values = Object.values(car);
console.log("values", values);

// Assign two objects in one
const colorObj = { color: "black" };
const backgroundObj = { background: "white" };

const assignedObj = Object.assign({}, colorObj, backgroundObj);
console.log("assignedObj", assignedObj);

export {};
