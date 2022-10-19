import { Component } from './component.js';

export class AddPet extends Component {
    template: string;
    constructor(public selector: string, public handle: (ev: Event) => void) {
        super();
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
        //antes render
        setTimeout(() => {
            document
                .querySelector('form')
                ?.addEventListener('submit', (ev: Event) => {
                    ev.preventDefault();
                    console.log('tengo q añadir');
                    handle(ev);
                });
        }, 100);
    }

    createTemplate() {
        return `
        <form>
            <div>
                <input
                    type="text"
                    id="name"
                    placeholder="Pet's name"
                    required
                />
            </div>
            <div>
                <input type="text" id="race" placeholder="Race" />
            </div>
            <button type="submit">Guardar</button>
        </form>
        `;
    }
}
