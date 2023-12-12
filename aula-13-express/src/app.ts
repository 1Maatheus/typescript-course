import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello, express!");
});

app.post("/api/produtos", (req, res) => {
  console.log(req.body);

  return res.status(200).send("Ok!");
});

app.all("/api/produtos/check", (req, res) => {
  if (req.method === "POST") {
    return res.send("Inseriu algum registro");
  } else if (req.method === "GET") {
    return res.send("Leu algum registro");
  } else {
    return res.send("Não podemos realizar esta operação!");
  }
});

app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.status(200).send("Utilizando as interfaces!");
});

app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "Shirt",
    price: 20.0,
    color: "Blue",
    sizes: ["P", "M", "G"],
  });
});

app.get("/api/produto/:id", (req: Request, res: Response) => {
  console.log(req.params);
  const id = req.params.id;
  if (id === "1") {
    const product = {
      id: 1,
      name: "bone",
      price: 300.0,
    };

    return res.json(product);
  } else {
    return res.send("Produto não encontrado");
  }
});

app.listen(3000, () => {
  console.log("Work!");
});
