//8f2b285b1661c62794d63c2bba007f06 
//http://api.weatherstack.com/current?access_key=8f2b285b1661c62794d63c2bba007f06&query=recife

// mapbox pk.eyJ1IjoidGhhbGVzYm1jIiwiYSI6ImNrbDM0NW9wOTBrc2YzMnFtam12cmdlMW0ifQ.zIEs--mrn0vV2lY8XF5J3A
// https://api.mapbox.com/geocoding/v5/mapbox.places/recife.json?access_token=pk.eyJ1IjoidGhhbGVzYm1jIiwiYSI6ImNrbDM0NW9wOTBrc2YzMnFtam12cmdlMW0ifQ.zIEs--mrn0vV2lY8XF5J3A&limit=1
const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=8f2b285b1661c62794d63c2bba007f06&query=recife'

request({url:url, json:true}, (error, response)=>{
    //jsontrue ja transfroma em json e n precisa de Json.Parse

    if (error){
        console.log('n conseguiu conectar')
    }else if(response.body.error){
        console.log("erro")
    }
    else{
        console.log(response.body.current.temperature, response.body.current.weather_descriptions);
    }
})

const geoposition= "https://api.mapbox.com/geocoding/v5/mapbox.places/recife.json?access_token=pk.eyJ1IjoidGhhbGVzYm1jIiwiYSI6ImNrbDM0NW9wOTBrc2YzMnFtam12cmdlMW0ifQ.zIEs--mrn0vV2lY8XF5J3A&limit=1"
request({url:geoposition, json:true}, (error,response)=>{
    if(error){
        console.log("unable to connect with geoposition api")

    } else if (response.body.features.length ===0){
        console.log("Nao foi possivel achar o local")
    }else{
        const latitude= response.body.features[0].center[1]
        const longitude= response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
    
})