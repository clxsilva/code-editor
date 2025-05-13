const area = document.getElementById('txtArea')
area.focus()

// Mudar a cor de texto
api.setColor((event, color) => {
    area.style.color = color
})