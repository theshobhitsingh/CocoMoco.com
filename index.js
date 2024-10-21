const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const ejs = require("ejs");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "Adam",
    content: "Hey! Let's Catch up for some Code and Coffee!",
  },
  {
    id: uuidv4(),
    username: "Bob",
    content: "Yes! Why not?",
  },
  {
    id: uuidv4(),
    username: "Casey",
    content: "I will be joining you guys too!",
  },
  {
    id: uuidv4(),
    username: "Dan",
    content: "I will stay Home and Study!",
  },
  {
    id: uuidv4(),
    username: "Eve",
    content: "Me too!",
  },
];
app.get("/", (req, res) => {
  res.render("index", { posts });
});
app.get("/posts", (req, res) => {
  res.render("index", { posts });
});
app.get("/posts/new", (req, res) => {
  res.render("new", { posts });
});
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  res.render("show", { post });
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  res.render("edit", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => p.id === id);
  post.content = newContent;
  console.log(newContent);
  res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => p.id !== id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log("The app is listening at port " + port);
});
