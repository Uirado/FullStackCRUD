
export class Pessoa {
  constructor(
    public nome?: string,
    public cpf?: string,
    public telefone?: string,
    public escolaridade?: Escolaridade,
    public id?: number,
) { }
}

export enum Escolaridade {
  FUNDAMENTAL_INCOMPLETO = 'FUNDAMENTAL_INCOMPLETO',
  FUNDAMENTA_COMPLETO = 'FUNDAMENTA_COMPLETO',
  MEDIO_INCOMPLETO = 'MEDIO_INCOMPLETO',
  MEDIO_COMPLETO = 'MEDIO_COMPLETO',
  SUPERIOR_INCOMPLETO = 'SUPERIOR_INCOMPLETO',
  SUPERIOR_COMPLETO = 'SUPERIOR_COMPLETO',
  POS_GRADUACAO_INCOMPLETO = 'POS_GRADUACAO_INCOMPLETO',
  POS_GRADUACAO_COMPLETO = 'POS_GRADUACAO_COMPLETO',
  MESTRADO_INCOMPLETO = 'MESTRADO_INCOMPLETO',
  MESTRADO_COMPLETO = 'MESTRADO_COMPLETO',
  DOUTORADO_INCOMPLETO = 'DOUTORADO_INCOMPLETO',
  DOUTORADO_COMPLETO = 'DOUTORADO_COMPLETO',
}


export function getEscolaridadeName(e: Escolaridade): string {
  switch (e) {
    case Escolaridade.FUNDAMENTAL_INCOMPLETO: return 'Fundamental incompleto';
    case Escolaridade.FUNDAMENTA_COMPLETO: return 'Fundamental completo';
    case Escolaridade.MEDIO_INCOMPLETO: return 'Médio incompleto';
    case Escolaridade.MEDIO_COMPLETO: return 'Médio completo';
    case Escolaridade.SUPERIOR_INCOMPLETO: return 'Superior incompleto';
    case Escolaridade.SUPERIOR_COMPLETO: return 'Superior completo';
    case Escolaridade.POS_GRADUACAO_INCOMPLETO: return 'Pós graduação incompleta';
    case Escolaridade.POS_GRADUACAO_COMPLETO: return 'Pós graduação completa';
    case Escolaridade.MESTRADO_INCOMPLETO: return 'Mestrado incompleto';
    case Escolaridade.MESTRADO_COMPLETO: return 'Mestrado completo';
    case Escolaridade.DOUTORADO_INCOMPLETO: return 'Doutorado incompleto';
    case Escolaridade.DOUTORADO_COMPLETO: return 'Doutorado completo';
    default: return '';
  }
}

export function getEscolaridadeValues(): { value: Escolaridade, name: string }[] {
  const result = [];
  const keys = Object.values(Escolaridade);
  // keys = keys.splice(keys.length / 2, keys.length / 2);
  keys.forEach(k => {
    result.push({ value: k, name: getEscolaridadeName(k)});
  });

  return result;
}
