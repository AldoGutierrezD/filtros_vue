Vue.filter('alReves', (valor) => valor.split('').reverse().join(''));

new Vue({
    el: "#cont",
    data: {
        busqueda: '',
        minimo: 5,
        juegos: [
            {titulo:"Minecraft" , genero:"Didáctico" , puntuacion: 9},
            {titulo:"GTA" , genero:"Mundo Abierto" , puntuacion: 10},
            {titulo:"CyberPunk" , genero:"Acción" , puntuacion: 6},
            {titulo:"FIFA" , genero:"Deportes" , puntuacion: 8},
            {titulo:"Forza" , genero:"Carreras" , puntuacion: 7},
        ]
    },
    computed: {
        mejoresJuegos(){
            return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
        },
        buscarJuego(){
            return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
        }
    }
});