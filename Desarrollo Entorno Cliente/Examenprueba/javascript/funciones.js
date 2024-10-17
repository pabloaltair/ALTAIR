export function creaImagen() {
 const image= document.createElement('img');
 image.className = "img-fluid";
 image.src="./imagenes/elcano.jpg";
 return image;
    
    
}

export function creaTabla() {
    const arrayHuracanes = [
        { cat: 1, vel: '120-153' },
        { cat: 2, vel: '154-177' },
        { cat: 3, vel: '178-209' },
        { cat: 4, vel: '210-249' },
        { cat: 5, vel: 'Más de 250' },
    ]
    // Crea una tabla con los datos de este array
    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.innerText = "Categoría";
    const th2 = document.createElement('th');
    th2.innerText="Velocidad";
    tr.appendChild(th1);
    tr.appendChild(th2);
    table.appendChild(tr)

    arrayHuracanes.forEach(item => {
      tr.innerHTML;
      const td1= document.createElement('td');
      const td2= document.createElement('td');
      tr.appendChild(td1);
      tr.appendChild(td2);
      table.appendChild(tr)
    });
}

export function creaParrafo() {
    // Crea un párrafo con texto genérico
}

export function creaLista() {
    const lista = ['Bananas', 'Manzanas', 'Melocotones', 'Naranjas'];
    // Crea una lista con este array y la devuelve
}