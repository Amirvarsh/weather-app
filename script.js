//variables
var temp, maxtemp, mintemp, desc, wind, hum, main, day, night;

//weather
var x = [
  "clear sky",
  "few clouds",
  "scattered clouds",
  "tornado",
  "shower rain",
  "mist",
  "thunderstorm",
  "rain",
  "snow",
  "haze",
  "broken clouds",
  "drizzle",
];
//source
var y = [
  "icon/sunny.png",
  "icon/overcast.png",
  "icon/cloud.png",
  "icon/tornado.png",
  "icon/fog.png",
  "icon/showers.png",
  "icon/rain.png",
  "icon/thunderstorm.png",
  "icon/snow.png",
  "icon/fog.png",
];
var z = [
  "icon/clear.png",
  "icon/night cloudy.png",
  "icon/cloudy.png",
  "icon/tornado.png",
  "icon/fog.png",
  "icon/showers.png",
  "icon/night rain.png",
  "icon/thunderstorm.png",
  "icon/snow.png",
  "icon/fog.png",
];
function weather(input) {
  var city = input;
  var im = (document.querySelector("#icon").src = "icon/clear.png");
  var myurl = "https://api.openweathermap.org/data/2.5/weather?";
  var key = "547faf489fe6ea465e4b3aec4b56560e";
  var url = myurl + "appid=" + key + "&units=metric&q=" + city;
  // alert(url);
  fetch(url)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      temp = data.main.temp;
      document.querySelector("#deg").innerHTML = Math.round(temp) + "&deg;C";
      mintemp = data.main.temp_min;
      document.querySelector("#min").innerHTML = Math.round(mintemp) + "&deg;C";
      maxtemp = data.main.temp_max;
      document.querySelector("#max").innerHTML =
        "/" + Math.round(maxtemp) + "&deg;C";
      wind = data.wind.speed;
      document.querySelector("#wind").innerHTML = Math.round(wind) + "mph";
      hum = data.main.humidity;
      document.querySelector("#humidity").innerHTML = hum + "%";
      desc = data.weather[0].description;
      document.querySelector("#description").innerHTML = desc;
      //condition
      var dn = data.dt;
      // alert(dn);
      day = data.sys.sunrise;
      night = data.sys.sunset;
      // alert(day+" "+night);
      if (dn > night) {
        // alert("Night");
        switch (desc) {
          case x[0]:
            im.src = z[0];
            break;
          case x[1]:
            im.src = z[1];
            break;
          case x[2]:
            im.src = z[2];
            break;
          case x[3]:
            im.src = z[3];
            break;
          case x[4]:
            im.src = z[4];
            break;
          case x[5]:
            im.src = z[5];
            break;
          case x[6]:
            im.src = z[6];
            break;
          case x[7]:
            im.src = z[6];
            break;
          case x[8]:
            im.src = z[6];
            break;
          case x[9]:
            im.src = z[6];
            break;
          case x[10]:
            im.src = z[6];
            break;
          case x[11]:
            im.src = z[6];
            break;
        }
      } else if (dn >= day) {
        // alert("Day");
        switch (desc) {
          case x[0]:
            im.src = y[0];
            break;
          case x[1]:
            im.src = y[1];
            break;
          case x[2]:
            im.src = y[2];
            break;
          case x[3]:
            im.src = y[3];
            break;
          case x[4]:
            im.src = y[4];
            break;
          case x[5]:
            im.src = y[5];
            break;
          case x[6]:
            im.src = y[6];
            break;
          case x[7]:
            im.src = y[7];
            break;
          case x[8]:
            im.src = y[8];
            break;
          case x[9]:
            im.src = y[9];
            break;
          case x[10]:
            im.src = y[10];
            break;
          case x[11]:
            im.src = y[11];
            break;
        }
      }
    })
    .catch((err) => console.log(err));
}
//function end

function con(detector) {
  if (detector == "fahrenheit") {
    var far = (temp * 9) / 5 + 32;
    document.querySelector("#deg").innerHTML = Math.round(far) + "&deg;F";
    var farmin = (mintemp * 9) / 5 + 32;
    document.querySelector("#min").innerHTML = Math.round(farmin) + "&deg;F";
    var farmax = (maxtemp * 9) / 5 + 32;
    document.querySelector("#max").innerHTML =
      "/" + Math.round(farmax) + "&deg;F";
  } else {
    document.querySelector("#deg").innerHTML = Math.round(temp) + "&deg;C";
    document.querySelector("#min").innerHTML = Math.round(mintemp) + "&deg;C";
    document.querySelector("#max").innerHTML =
      "/" + Math.round(maxtemp) + "&deg;C";
  }
}
