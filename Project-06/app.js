window.onload = () => {

    const sections = document.querySelectorAll('section')
    for (const section of sections) {
        section.style.border = '2px solid green';
        section.style.margin = '10px';
        section.style.padding = '10px';
        section.style.borderRadius = '15px'
    }

    const sections2 = document.getElementById('section3')
    sections2.style.backgroundColor = 'yellow';



}

