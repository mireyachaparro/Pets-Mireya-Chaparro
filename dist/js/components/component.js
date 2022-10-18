export class Component {
    render(selector, template) {
        //pinta dentro
        const element = document.querySelector(selector); //dondé lo voy a pintar
        if (element === null)
            return; //si es null, que no haga nada
        element.innerHTML = template; //qué voy a pintar
        return true;
    }
    renderAdd(selector, template) {
        //pinta dentro
        const element = document.querySelector(selector); //dondé lo voy a pintar
        if (element === null)
            return; //si es null, que no haga nada.
        element.innerHTML += template; //qué voy a pintar
        return true;
    }
    renderOuter(selector, template) {
        //pinta encima
        const element = document.querySelector(selector); //dondé lo voy a pintar
        if (element === null)
            return; //si es null, que no haga nada
        element.outerHTML = template; //qué voy a pintar
        return true;
    }
}
