
window.addEventListener("load", () =>{
    let lon;
    let lat;
    const notification = document.querySelector(".notification");
    const icons = document.getElementById("icon").src;
    const tempertrues = document.querySelector(".degree");
    const descripton = document.querySelector(".descripton-text");
    const location = document.querySelector(".location-timezone");
    
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
           lon = position.coords.longitude
           lat= position.coords.latitude
            const proxy = "https://cors-anywhere.herokuapp.com/"
          let api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e684b728bbd429ed85752bf7d4658d9c`
                    
          fetch(api)
          .then(response => response.json())
          .then(data => { console.log(data)
            const {name} = data
            const {feels_like} = data.main
            const {id,main} = data.weather[0]
            location.innerHTML = name
            descripton.innerHTML = main
            tempertrues.innerHTML = Math.round(feels_like -  273.15) * 9/5 + 32.2
           
            if(id < 250){
                icons = '/images/rain.png'
            }
            else if (id < 550 > 250){
                icons = '/images/rain (2).png'
            }

            else if (id < 600  > 550){
                icons= '/images/snow.png'
            }
            else if (id === 800  ){
                icons = '/images/sun.png'
            }
            else if (id >= 801){
                icons = '/images/rain.png'
            }

           })
        });

       
    }
    
});




