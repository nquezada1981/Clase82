const menu = document.getElementById("menu");
const contenido = document.getElementById("contenido");

async function listar() {
    const response  = await fetch('http://localhost:3000/v1/movies');
    const movies    = await response.json();
    const ul = document.createElement("ul");
    movies.forEach(element => {
        const li = document.createElement("li");
        li.innerHTML=element.name;
        ul.appendChild(li);
    });
    menu.appendChild(ul);

}

async function listar2() {
    const response  = await fetch('http://localhost:3000/v1/movies');
    const movies    = await response.json();
    const select = document.createElement("select");
    select.className = "form-select"
    //punto 7
    //punto 9
    movies.forEach(element => {
        const option = document.createElement("option");
        option.innerHTML=element.name;
        option.value = element.id;
        select.appendChild(option);
        
    });
    contenido.appendChild(select);

}
  
listar()
listar2()

