import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());

function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}

app.use(showPath);

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

app.get("/api/produtos/:id/review/:reviewId", (req: Request, res: Response) => {
  const productId = req.params.id;
  const reviewId = req.params.reviewId;

  return res.send(`Acessando a review ${reviewId} do produto ${productId}`);
});

function getUser(req: Request, res: Response) {
  return res.send("Usuário encontrado");
}

app.get("/api/user/:id", getUser);

function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    next();
  } else {
    console.log("Acesso restrito!");
  }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  return res.json({
    message: "Bem-vindo a área administrativa.",
  });
});

app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);

    return res.json({
      status: true,
    });
  }
);

app.get("/api/error", (req: Request, res: Response) => {
  try {
    throw new Error("Algo deu errado!");
  } catch (err: any) {
    res.status(500).json({
      message: err.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Work!");
});
