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
export type TParams = {
  width: number;
  height: number;
  weight: number;
};
export type TDetail = {
  title: string;
  params: TParams;
};
export type TProject= {
  name: string;
  details:TDetail[];
  mainEngineer: string;
  deadline: string;
}
export type TDepartment = {
  tech:TProject[];
  turbo:TProject[];
  chemical: TProject[];
}
