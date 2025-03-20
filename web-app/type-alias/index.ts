// Type Alias
type PersonInfoType = string | number;

const personNameInf: PersonInfoType = "Ivan";
const personAgeInf: PersonInfoType = 25;

type Status = "approved" | "rejected" | "pending" | "fullfiled";

const currentStatus: Status = "fullfiled";

type PersonData = {
  name: string;
  lastName: string;
  age: number;
  city: "Sofia" | "Plovdiv" | "Varna";
};
