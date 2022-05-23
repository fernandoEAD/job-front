import { Competencia } from "./competencia.model";
export interface Cadastro {
  id?: number;
  nome: String;
  cpf: String;
  data?: Date;
  email: String;
  telefone: String;
  escolaridade: String;
  funcao: String;
  competencia1: "",
  descricao1: "",
  prof1: "",
  competencia2: "",
  descricao2: "",
  prof2: ""
  isAproved?: boolean;
}
