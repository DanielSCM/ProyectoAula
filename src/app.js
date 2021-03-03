const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// importing routes


// settings
app.set('port', process.env.PORT || 3000);

app.use((req, res, next)=>{
    next();
});

// middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//const
const Ruta = require('./routes');
const registroRuta =require('./routes/registro');
const loginRuta = require('./routes/login');
const usuariosRuta= require('./routes/usuarios');
const creditoRuta= require('./routes/credito');
const creditoOnlineRuta = require('./routes/creditoOnline');
const segurosRuta = require('./routes/seguros');
const productosRuta = require('./routes/productos');
const tarjetacreditoRuta= require('./routes/tarjetacredito');
const tarjetadebitoRuta =require('./routes/tarjetadebito');
const sobreRuta = require('./routes/sobrenosotros');
const dolaresRuta = require('./routes/cvdolares');
const phoneRuta = require('./routes/sucursalphone');
const fisicaRuta = require('./routes/sucursalfisica');
const negociosRuta = require('./routes/negocios');
const tasasRuta = require('./routes/tasas');
const vehiculosRuta = require('./routes/rentavehiculos');
const vacacionesRuta = require('./routes/vacaciones');
const herramientasRuta = require('./routes/herramientas');
const comercioRuta = require('./routes/comercio');
const internaiconaRuta = require('./routes/comerciointernacional');


//routes

app.use("/",Ruta);
app.use("/comercio",comercioRuta);
app.use("/comerciointernacional",internaiconaRuta);
app.use("/creditoOnline",creditoOnlineRuta);
app.use("/credito",creditoRuta);
app.use("/cvdolares", dolaresRuta);
app.use("/herramientas", herramientasRuta);
app.use("/login",loginRuta);
app.use("/negocios",negociosRuta);
app.use("/productos",productosRuta);
app.use("/registro",registroRuta);
app.use("/rentavehiculos",vehiculosRuta);
app.use("/seguros",segurosRuta);
app.use("/sobrenosotros",sobreRuta);
app.use("/sucursalfisica", fisicaRuta);
app.use("/sucursalphone",phoneRuta);
app.use("/tarjetacredito", tarjetacreditoRuta);
app.use("/tarjetadebito",tarjetadebitoRuta);
app.use("/tasas",tasasRuta);
app.use("/usuarios",usuariosRuta);
app.use("/vacaciones",vacacionesRuta);

// stactic files
app.unsubscribe(express.static(path.join(__dirname,'public')));

// starting the server
app.listen(app.get('port'), () =>{
    console.log('server on port 3000');
});