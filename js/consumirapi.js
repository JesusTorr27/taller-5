apiKeyMarvel = {
    render: () => {
        const urlAPI =
            "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=2c4c314d5d9ba2524513811acd67d577&hash=3fbe538512a39bfea1553fd095d98c68";
        let personajes = [];
        let imagenes = [];
        let descripciones = [];
        let series = [];
        let comics = [];
        let eventos = [];
        let stories = [];
        for (let index = 0; index < 9; index++) {
            personajes[index] = document.querySelector(`#personaje${index}`); 
            imagenes[index] = document.querySelector(`#imagen${index}`);
            descripciones[index] = document.querySelector(`#descripcion${index}`);
            series[index] = document.querySelector(`#serie${index}`);
            comics[index] = document.querySelector(`#comic${index}`);
            eventos[index] = document.querySelector(`#evento${index}`);
            stories[index] = document.querySelector(`#stories${index}`);
        }
        fetch(urlAPI)
            .then((response) => response.json())
            .then((json) => {
                for (let index = 0; index < 4; index++) {
                    personajes[index].innerText = json.data.results[index].name;

                    let UrlImagen =
                        json.data.results[index].thumbnail.path + "." + json.data.results[index].thumbnail.extension;
                    let imagen = crearImagen(UrlImagen);
                    addHijo(imagenes[index], imagen);
                    imagen.width = 200;
                    
                    descripciones[index].innerText = json.data.results[index].description;

                    let link = document.createElement("a");
                    link.innerText = "Ver series";
                    link.href = `html/series${index}.html`;
                    addHijo(series[index], link);
                    series[index].height = 50;

                    let link2 = document.createElement("a");
                    link2.innerText = "Ver Comics";
                    link2.href = `html/comics${index}.html`;
                    addHijo(comics[index], link2);
                    comics[index].height = 50;

                    let link3 = document.createElement("a");
                    link3.innerText = "Ver Events";
                    link3.href = `html/events${index}.html`;
                    addHijo(eventos[index], link3);
                    eventos[index].height = 50;

                    let link4 = document.createElement("a");
                    link4.innerText = "Ver Stories";
                    link4.href = `html/stories${index}.html`;
                    addHijo(stories[index], link4);
                    stories[index].height = 50;

                }
                for (let index = 4; index < 8; index++) {
                    personajes[index].innerText = json.data.results[index].name;

                    let UrlImagen =
                        json.data.results[index].thumbnail.path + "." + json.data.results[index].thumbnail.extension;
                    let imagen = crearImagen(UrlImagen);
                    addHijo(imagenes[index], imagen);
                    imagen.width = 200;
                    
                    descripciones[index].innerText = json.data.results[index].description;

                    let link = document.createElement("a");
                    link.innerText = "Ver series";
                    link.href = `html/series${index}.html`;
                    addHijo(series[index], link);
                    series[index].height = 50;

                    let link2 = document.createElement("a");
                    link2.innerText = "Ver Comics";
                    link2.href = `html/comics${index}.html`;
                    addHijo(comics[index], link2);
                    comics[index].height = 50;

                    let link3 = document.createElement("a");
                    link3.innerText = "Ver Events";
                    link3.href = `html/events${index}.html`;
                    addHijo(eventos[index], link3);
                    eventos[index].height = 50;

                    let link4 = document.createElement("a");
                    link4.innerText = "Ver Stories";
                    link4.href = `html/stories${index}.html`;
                    addHijo(stories[index], link4);
                    stories[index].height = 50;

                }
                
            });
    },
};
apiKeyMarvel.render();