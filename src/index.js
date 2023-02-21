import app from "./app";
import router from "./routes/cuidadanos.routes";

app.listen(app.get('port'));


app.use(router)


console.log(`server on port`, app.get('port'));