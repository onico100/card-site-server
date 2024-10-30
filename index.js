const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();

let DB = [
  {
    id: 1730281529820,
    text: "text 1",
    backgraund: "color4",
  },
  {
    id: 1730281554431,
    text: "text 2",
    backgraund: "color6",
  },
  {
    id: 1730281558145,
    text: "text 3",
    backgraund: "color5",
  },
  {
    id: 1730281567722,
    text: "text 4",
    backgraund: "color3",
  },
  {
    id: 1730281598846,
    text: "text 5",
    backgraund: "color1",
  },
  {
    id: 1730281628653,
    text: "text 6",
    backgraund: "color9",
  },
  {
    id: 1730281649554,
    text: "text 7",
    backgraund: "color7",
  },
  {
    id: 1730281656403,
    text: "enter text",
    backgraund: "color2",
  },
];

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/cards", (req, res) => {
  res.json(DB);
});

app.get("/cards/:id", (req, res) => {
  const id = req.params.id;
  const card = DB.find((card) => card.id == id);
  res.json(card);
});

app.post("/cards", (req, res) => {
  const card = {
    id: Date.now(),
    text: req.body.text,
    backgraund: req.body.backgraund,
  };
  DB.push(card);
  res.json(card);
});

app.patch("/cards/:id", (req, res) => {
  console.log(req.body);
  const id = req.params.id;
  let cardIndex = DB.findIndex((card) => card.id == id);

  if (cardIndex === -1)
    return res.status(404).send({ error: "Card not found" });

  DB[cardIndex] = { ...DB[cardIndex], ...req.body };
  res.json(DB[cardIndex]);
});

app.delete("/cards/:id", (req, res) => {
  const id = req.params.id;
  const index = DB.findIndex((card) => card.id == id);
  if (index !== -1) {
    DB.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send({ error: "Card not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
