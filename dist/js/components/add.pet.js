/* eslint-disable indent */
import { Component } from './component.js';
export class AddPet extends Component {
    constructor(selector, handle) {
        super();
        this.selector = selector;
        this.handle = handle;
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
        //antes render
        setTimeout(() => {
            var _a;
            (_a = document.querySelector('form')) === null || _a === void 0
                ? void 0
                : _a.addEventListener('submit', (ev) => {
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
