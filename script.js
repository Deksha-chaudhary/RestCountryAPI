function getAPIData(){
  var name = document.getElementById("search").value
  if(!name)
  name="bharat"
      var request=new XMLHttpRequest()
      request.open("get","https://restcountries.com/v3.1/name/"+name)
      request.send()
      request.addEventListener("load",()=>{
        // var data=document.getElementById("".innerHTML = request.responseText
        // data = data[0]
        var [data] = JSON.parse(request.responseText)
        
        // console.log(data.flags.svg);
       
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("capital").innerHTML = data.capital[0]
        document.getElementById("flags").src = data.flags.svg
        document.getElementById("area").innerHTML = data.area
        document.getElementById("population").innerHTML = data.population
        document.getElementById("region").innerHTML = data.region
        document.getElementById("subregion").innerHTML = data.subregion
        document.getElementById("continent").innerHTML = data.continents
        document.getElementById("borders").innerHTML = data.borders
        document.getElementById("timezones").innerHTML = data.timezones
        document.getElementById("independent").innerHTML = data.independent
        document.getElementById("unmember").innerHTML = data.unMember
        document.getElementById("landlocked").innerHTML = data.landlocked
        document.getElementById("maps").href  = data.maps.googleMaps
        document.getElementById("startofweek").innerHTML = data.startOfWeek
      
      })
    }
      getAPIData()