/* eslint-disable no-template-curly-in-string */
import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'O campo é obrigatório.',
    oneOf: 'O campo deve ser um dos seguintes valores: ${values}',
    notOneOf: 'O campo não pode ser um dos seguintes valores: ${values}'
  },
  string: {
    length: 'O campo deve ter exatamente ${length} caracteres',
    min: 'O campo deve ter pelo menos ${min} caracteres',
    max: 'O campo deve ter no máximo ${max} caracteres',
    email: 'O e-mail é inválido.',
    url: 'deve ter um formato de URL válida',
    trim: 'não deve conter espaços no início ou no fim.',
    lowercase: 'deve estar em maiúsculo',
    uppercase: 'deve estar em minúsculo'
  },
  number: {
    min: 'deve ser no mínimo ${min}',
    max: 'deve ser no máximo ${max}',
    lessThan: 'deve ser menor que ${less}',
    moreThan: 'deve ser maior que ${more}',
    positive: 'deve ser um número posítivo',
    negative: 'deve ser um número negativo',
    integer: 'deve ser um número inteiro'
  },
  date: {
    min: 'deve ser maior que a data ${min}',
    max: 'deve ser menor que a data ${max}'
  },
  array: {
    min: 'deve ter no mínimo ${min} itens',
    max: 'deve ter no máximo ${max} itens'
  }
});

export default Yup;
