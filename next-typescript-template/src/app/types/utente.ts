import { interface } from "readline";

export interface Utente {
  id: number;
  nome: string;
  email: string;
  eta: number;
  attivo: boolean;
}
