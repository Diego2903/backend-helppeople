import express from "express";
import config from "./config";
import ciudadanosRoutes from "./routes/cuidadanos.routes";
import tipoDocumentoRoutes from "./routes/tipoDocumento.routes";
import aplicarVacanteRoutes from "./routes/vacantes.routes";
import coors from "cors"
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';

const app = express();

// Setings

app.set('port', config.port);

// CORS

app.use(coors())

// middlewares

app.use(bodyParser.json())

app.use(expressValidator())


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(ciudadanosRoutes);
app.use(tipoDocumentoRoutes);
app.use(aplicarVacanteRoutes);

export default app