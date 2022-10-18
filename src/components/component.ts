export abstract class Component {
    render(selector: string, template: string) {
        //pinta dentro
        const element = document.querySelector(selector); //dondé lo voy a pintar
        if (element === null) return; //si es null, que no haga nada
        element.innerHTML = template; //qué voy a pintar
        return true;
    }
    renderAdd(selector: string, template: string) {
        //pinta dentro
        const element = document.querySelector(selector); //dondé lo voy a pintar
        if (element === null) return; //si es null, que no haga nada.
        element.innerHTML += template; //qué voy a pintar
        return true;
    }
    renderOuter(selector: string, template: string) {
        //pinta encima
        const element = document.querySelector(selector); //dondé lo voy a pintar
        if (element === null) return; //si es null, que no haga nada
        element.outerHTML = template; //qué voy a pintar
        return true;
    }
}
