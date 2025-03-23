const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', ()=> {
        removeelement()
        panel.classList.add('active')
    })
})

function removeelement(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


