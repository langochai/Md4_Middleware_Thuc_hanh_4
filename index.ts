import express from "express";
import bodyParser from "body-parser";
import {router} from "./src/router/router";

const PORT = 8000;
const app = express();

app.use(bodyParser.json());
app.use(router)
app.listen(PORT,()=>{
    console.log(`segs at ${PORT}`)
});