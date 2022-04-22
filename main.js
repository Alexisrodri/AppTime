let weather = {
    "apiKey": "3c006f265c3d9ef27f3fbb4d0e6db6a6",
    fetchWeather : function (city){
          fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city + 
            "&appid="
            + this.apiKey 
            )
            .then((response) => response.json())
            .then((data) =>  this.displayWeather(data))
    },
    displayWeather: function(data){
        const {name} = data;
        const {main,icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        const ciudad = document.querySelector(".ciudad").innerText = "El clima en " + name;
        const icono = document.querySelector(".icono").src = "https://openweathermap.org/img/wn/"+ icon +".png"
        const temperatura = document.querySelector(".temperatura").innerText = description;
        const descripcion = document.querySelector(".grados").innerText = "Su temperatura es de :" + " " + Math.round((temp)* 5/9) + "℃";
        const humedad = document.querySelector(".humedad").innerText = "Con una humedad del: "+ " " + humidity + "%";
        const viento = document.querySelector(".velocidad").innerText = "Con vientos de: " + speed + "Km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1200x720/?"+ name +"')"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search").value);
    }
};

document.querySelector(".caja-app button").addEventListener("click",function(){
    weather.search();
})

document.querySelector(".caja-app").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})

weather.fetchWeather("Galapagos");