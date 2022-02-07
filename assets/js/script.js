//Crear Clase Padre Multimedia
class Multimedia {
    constructor(url) {
        let _url = url; 
        this.getUrl = () => _url;
        this.setUrl = (nuevaUrl) => _url = nuevaUrl;
        
    }

    get url() {
        return this.getUrl();
    }

    set url(nuevaUrl){
        this.setUrl(nuevaUrl);
    }

    setInicio() {
        return "“Este método es para realizar un cambio en la URL del video”";
    }
}

// Crear Clase Hija Reproductor
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        let _id = id;
        this.getId = () => _id;
    }

    get id() {
        return this.getId();
    }

    playMultimedia() {
        play.recibirDatos(this.url, this.id);
    };

    setInicio(tiempo) {
        let nuevaUrl = `${this.url}?start=${tiempo}`;
        this.setUrl(nuevaUrl);
        console.log(nuevaUrl);
    };
};

//Funcio IIFE autoejecutable
const play = (() => { 
    mostrarDatos = (url, id) => {   
        document.getElementById(id).setAttribute('src', url);
    }
    return {
        recibirDatos: (url, id) => {  
            mostrarDatos(url, id); 
        }
    };
})();

//almacenar las URL de los videos en Variables
const urlMusic = "https://www.youtube.com/embed/UP2XoGfhJ1Y";
const urlPelis = "https://www.youtube.com/embed/5IpYOF4Hi6Q";
const urlSeries = "https://www.youtube.com/embed/NB0ipPSq76o";

//Instanciar clases hijas pasando los argumentos (la url y el id para cada etiqueta iframe).
const musica = new Reproductor(urlMusic, "musica");
const pelicula = new Reproductor(urlPelis, "peliculas");
const serie = new Reproductor(urlSeries, "series");

//Metodo setInicio para modiciar tiempo de inicio del video en la instancia seleccionada
pelicula.setInicio(18);
musica.setInicio(45);

//Metodo Play Multimedia para mostar Videos
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();