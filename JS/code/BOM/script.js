let lat; let lang;
const API_KEY = "9e51ce689208b36d90f8e425de2e268f"

window.navigator.geolocation.getCurrentPosition((pos) =>
{
    console.log(pos.coords.latitude, pos.coords.longitude)
    lat = pos.coords.latitude;
    lang = pos.coords.longitude;
      fetch(
				`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lang}&appid=${API_KEY}`,
			)
				.then((res) => res.json())
				.then((data) => console.log(data))
},
        (err) => console.log(err))

        window