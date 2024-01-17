//alert("hola mundo");

let ip=document.getElementById('ip');
let pais=document.getElementById('pais');
let continente=document.getElementById('continente');
let zona_horaria=document.getElementById('zona_horaria');

const solicitudAPI = () => {
//hacer una peticion para un usuario con ID especifico

axios
.get('https://itp-zah-bdd.000webhostapp.com/php-geoip-api/index.php')
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
    ip.innerHTML = response.data.ip;
    pais.innerHTML = response.data.pais;
    continente.innerHTML = response.data.continente;
    zona_horaria.innerHTML = response.data.zona_horaria;

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });
}
//Llama al evento LOAD acada vez que se refresca o actualiza la página
//y llama a la función solicitud API que tiene la rutina
//de llamar a la API desde axios
window.addEventListener("load", solicitudAPI);