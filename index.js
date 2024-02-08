const express = require("express");
const cors = require("cors");
const path = require('path');

const app = express();
const port = 3005;

const imprimir = require("./app");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({"Estado":"Activo"});
});

app.post("/imprimir", (req, res) => {
  imprimir(req.body);
  res.json("Generado correctamente");
});

app.use((error, req, res, next) => {
  console.error("Error global:", error);
  res.status(500).json({ error: "Ocurrió un error en la aplicación" });
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});