import { Component } from './component.js';

export class AddPet extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
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
