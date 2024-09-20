function mostrarSigno() {
    const year = document.getElementById('year').value;
    const signos = [
        { nombre: 'Mono', img: './images/mono.jpeg' },
        { nombre: 'Gallo', img: './images/gallo.jpeg' },
        { nombre: 'Perro', img: './images/perro.jpeg' },
        { nombre: 'Cerdo', img: './images/cerdo.jpeg' },
        { nombre: 'Rata', img: './images/rata.jpeg' },
        { nombre: 'Buey', img: './images/buey.jpeg' },
        { nombre: 'Tigre', img: './images/tigre.jpeg' },
        { nombre: 'Conejo', img: './images/conejo.jpeg' },
        { nombre: 'Dragón', img: './images/dragon.jpeg' },
        { nombre: 'Serpiente', img: './images/serpiente.jpeg' },
        { nombre: 'Caballo', img: './images/caballo.jpeg' },
        { nombre: 'Cabra', img: './imagenes/cabra.jpeg' }
    ];

    if (year) {
        const residuo = year % 12;
        const signo = signos[residuo];

        // Mostrar el resultado del signo
        document.getElementById('signo').innerText = `Tu signo del horóscopo chino es: ${signo.nombre}`;
        
        // Mostrar el residuo
        document.getElementById('residuo').innerText = `Residuo de la operación: ${residuo}`;

        // Mostrar la imagen del signo
        const signoImg = document.getElementById('signo-img');
        signoImg.src = signo.img;
        signoImg.style.display = 'block';
    } else {
        alert('Por favor, ingresa un año válido.');
    }
}
