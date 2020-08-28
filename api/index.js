import express from "express";
import bodyParser from "body-parser";
import productRoutes from "./server/routes/ProductRoutes";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use("/products", productRoutes);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Só trabalho sem diversão faz de jack um bobão",
  })
);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
