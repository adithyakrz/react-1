function customRender(reactElement , container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (prop in reactElement.props){
        if (prop=== 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props:{
        href : "https://google.com",
        target : '_blank'
    },
    Children : 'Click me to go to Google'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)