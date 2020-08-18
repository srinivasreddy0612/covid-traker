const express=require("express");
const https = require("https");
const bodyParser =require("body-parser");

const app =express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", function (req , res){
const url="https://covid-19india-api.herokuapp.com/all#"
https.get(url ,function(response){
  console.log(response.statusCode);

  response.on("data",function(data){
  const coronaData =JSON.parse(data)

const Ia = coronaData[0].active_cases;
const Iar = coronaData[0].active_rate;
const Ic = coronaData[0].confirmed_cases ;
const Idr = coronaData[0].death_rate;
const Id =  coronaData[0].death_cases;
const Ir = coronaData[0].recovered_cases;
const Irr = coronaData[0].recovered_rate;


const APa =  coronaData[1].state_data[1].active;
const APar = coronaData[1].state_data[1].active_rate;
const APc = coronaData[1].state_data[1].confirmed;
const APdr =  coronaData[1].state_data[1].death_rate;
const APd = coronaData[1].state_data[1].deaths;;
const APr = coronaData[1].state_data[1].recovered;
const APrr = coronaData[1].state_data[1].recovered_rate;


const TSa = coronaData[1].state_data[31].active;
const TSar =coronaData[1].state_data[31].active_rate;
const TSc = coronaData[1].state_data[31].confirmed;
const TSdr =  coronaData[1].state_data[31].death_rate;
const TSd = coronaData[1].state_data[31].deaths;
const TSr = coronaData[1].state_data[31].recovered;
const TSrr = coronaData[1].state_data[31].recovered_rate;



res.render("data",{Ia:Ia,Iar:Iar,Ic:Ic,Id:Id,Idr:Idr,Ir:Ir,Irr:Irr,APa:APa,APar:APar,APc:APc,APdr:APdr,APd:APd,APr:APr,APrr:APrr,TSa:TSa,TSar:TSar,TSc:TSc,TSdr:TSdr,TSd:TSd,TSr:TSr,TSrr:TSrr});

  })

 });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started sucessfully");
});

// PMAK-5f37bf0dfc24a2002942f056-3060e921e17eb3e84b75e7eb5489783a15


// https://documenter.getpostman.com/view/9215231/Szf25qKt?version=latest#6b203cdf-f90b-43ab-b0b4-36d1e4dbc9e1
// https://covid-19india-api.herokuapp.com/v2.0/state_data

// <!-- <form  action="/" method="post">
//   <label for="cityname">city name</label>
//   <input id="cityname" type="text" name="n1" >
//   <button type="submit" name="submit">get weather</button>

// </form> -->
