export type TSeason = {
  closeProjects: number;
  income: number;
  hired: number;
  dismissed: number;
  newProjects: number;
};
export type TSeasons = {
  winter: TSeason;
  summer: TSeason;
  autumn: TSeason;
  spring: TSeason;
};
export type TDepartament = "TECH" | "DESIGN" | "PROJECTS";
export type TEmploee = {
  name: string;
  departament: string;
  experience: number;
  isClosedProjects: boolean;
  salary: number;
};
