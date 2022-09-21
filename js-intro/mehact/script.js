function createElement(elementType, properties, children) {

    let element = document.createElement(elementType);

    //object.keys gets all keys from the object proeprties. then with foreach we go through all the keys
    Object.keys(properties).forEach(propName => {
        //sets the key to value in element
        element[propName] = properties[propName]
    })

    children.forEach(child => {

        if (typeof child === 'string') {
            let node = document.createTextNode(child)
            element.appendChild(node);
        } else {
            element.appendChild(child);
        }



    })

    return element;

}


function App() {
    //create a element of (type, attributed, content)
    return createElement('div', { className: 'container' }, [
        createElement('h1', {}, ['counter: ' + counter]),
        createElement('button', {}, ['click me'])
    );


}

function render() {
    let root = document.getElementById('root');

    root.appendChild(App()); //append the output of the app function to our root
}

render();