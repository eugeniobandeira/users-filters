import { IAddress } from "./address.interface";
import { IStatus } from "./status.interface";

export interface IUser {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  funcao: string;
  dataCadastro: string;
  ativo: boolean;
  idade: number;
  status: IStatus;
  endereco: IAddress;
}
