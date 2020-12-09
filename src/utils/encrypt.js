import md5 from 'md5';

// Constants
import { PUBLIC_KEY, PRIVATE_KEY } from '../core/constants';

const encrypt = () => {

  const data = new Date(); // pegando a data atual
  const ts = data.getTime(); // pegando o instante em que está sendo solicitado 

  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY); // criando o hash

  return `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`; // sendo colocado no padrão da api
};

export default encrypt;