const buttons = document.querySelectorAll(".button")
const body = document.querySelector('body')
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
       body.style.backgroundColor = e.target.id
    })
})

const addcolor = document.querySelector('#addcolor')
addcolor.addEventListener('click',()=>{
    const colorName = document.querySelector('#color').value
    if(!colorName) return
    const element = document.createElement('div')
    element.classList.add('button')
    element.id = colorName
    element.style.backgroundColor = colorName
    const Node = document.querySelector('#first-container')
    Node.appendChild(element)
    element.addEventListener('click',(e)=>{
       body.style.backgroundColor = e.target.id
    })
})