
export class Pessoa {
  constructor(
    public nome: string,
    public cpf: string,
    public telefone?: string,
    public escolaridade?: Escolaridade,
    public id?: number,
) { }
}

export enum Escolaridade {
  FUNDAMENTAL_INCOMPLETO,
  FUNDAMENTA_COMPLETO,
  MEDIO_INCOMPLETO,
  MEDIO_COMPLETO,
  SUPERIOR_INCOMPLETO,
  SUPERIOR_COMPLETO,
  POS_GRADUACAO_INCOMPLETO,
  POS_GRADUACAO_COMPLETO,
  MESTRAD_INCOMPLETO,
  MESTRADO_COMPLETO,
  DOUTORADO_INCOMPLETO,
  DOUTORADO_COMPLETO,
}
