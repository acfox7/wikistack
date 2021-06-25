const express = require("express");
const app = express();
const { db, Page, User } = require("./models");

const layout = require("./views/layout");

const PORT = 3000;

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(express.static("wikistack/public"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log("hello world");
  res.redirect("/wiki");
  // res.send(layout(""));
});

const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");

app.use("/wiki", wikiRouter);
app.use("/user", userRouter);

async function init() {
  try {
    await db.sync({ force: true });
  } catch (error) {
    console.log(error);
  }

  app.listen(PORT, function (PORT) {
    `listening on port ${PORT}`;
  });
}

init();
