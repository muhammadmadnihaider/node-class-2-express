const express = require("express");
const path = require("path");
const app = express();

const newPathToPublicFolder = path.join(__dirname, "../public/");
// console.log(newPathToPublicFolder);
// console.log(__dirname, "hey it's directory path");
// console.log(__filename);

app.use(express.static(newPathToPublicFolder));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Express world</h1>");
});

app.get("/helloworld", (req, res) => {
  res.send({
    name: "muhammad madni",
    message: "Hello world route",
    class: "node/express/mongo",
  });
});
app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.get("*", (req, res) => {
  res.send("no page found");
});

app.listen(3000, () => {
  console.log("Listening to port 3000 done");
});
