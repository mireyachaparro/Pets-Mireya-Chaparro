import { Component } from './component.js';

export class Main extends Component {
    //segundo componente: main
    template: string;
    constructor(public selector: string) {
        //cuando se instanciamos le decimos el selector.
        //pasar selector al padre
        super();
        this.template = this.createTemplate(); //construyo el template
        this.renderOuter(this.selector, this.template); //lo renderizo
    }
    //crear metodo template
    createTemplate() {
        return `
        <main>
        <h2>Pets List</h2>
        </main>
        `;
    }
}
