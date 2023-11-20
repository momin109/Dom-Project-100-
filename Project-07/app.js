// NodeList, htmlcollection, parentNode, childnodes, createElement

window.onload = () => {


    // const section = document.getElementById('section')
    // console.log(section.childNodes)
    // console.log(section.firstChild)
    // console.log(section.childNodes[1])
    // console.log(section.childNodes[2].previousSibling.previousSibling)

    // console.log(document.createElement('p'))
    // console.log(document.createElement('section'))
    const li = document.createElement('li')
    li.innerText = 'brund new text'
    // console.log(li)



    const section = document.querySelector('#section ul')
    section.appendChild(li)



    // 1. where to add
    const main = document.getElementById('main')

    // 2. what to b3 added
    const addSection = document.createElement('section')

    const h1 = document.createElement('h1')
    h1.innerText = 'Food list all'
    const ul = document.createElement('ul')
    const li1 = document.createElement('li')
    const li2 = document.createElement('li')
    const li3 = document.createElement('li')
    const li4 = document.createElement('li')
    li1.innerText = 'tometo khite moza'
    li2.innerText = 'mango am pakle moza'
    li3.innerText = 'site somai sosai ful fute'
    li4.innerText = 'alu begu borta khaite moza'

    //  added 
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    addSection.appendChild(h1)
    addSection.appendChild(ul)

    // main section added
    main.appendChild(addSection)



    const sectionDress = document.createElement('section')

    sectionDress.innerHTML = `
    <h1> My Dress Section </h1>
    <ul> 
    <li>this is pants</li>
    <li>this is shirt</li>
    <li>this is hafpant</li>
    <li>this is jacket</li>
    <li>this is tuishirt</li>
    </ul>
    `
    sectionDress.style.backgroundColor = 'gray'
    main.appendChild(sectionDress)
}