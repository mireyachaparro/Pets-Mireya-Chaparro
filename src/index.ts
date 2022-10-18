import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { Footer } from './components/footer.js';
import { PetList } from './components/pet.list.js';

console.log('loaded index');
// console.log(pets);
new Header('body'); //si tenemos una pagina about, pegamos esta linea y asi inserta el footer sin copiar todo el codigo
new Main('body');
new PetList('main');
new Footer('body');
