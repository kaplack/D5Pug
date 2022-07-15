const express = require("express");
//const { engine } = require("express-handlebars");
const Contenedor = require("./helper");

const routerProduct = require("./router/products.router");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use("/public", express.static("public"));

//Template Engines

const test1 = new Contenedor("productos.txt");
const productos = test1.getAll();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("main", {
    // products: productos,
    // listExists: true,
  });
});

// app.get("/api/formulario", (req, res) =>
//   res.sendFile(path.join(__dirname, "public/index.html"))
// );

app.use("/productos", routerProduct);

app.listen(8080);
