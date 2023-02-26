const express = require("express");
const app = express();
const { User } = require("./models");
const useRoutes = require("./routes/userRoutes");
const routes = require("./routes/userInfoRoutes");
app.get("/", (req, res) => {
  res.json({ message: "welcome home" });
});
app.use(express.json());
app.use(useRoutes);
app.use(routes)
app.listen(5100, () => {
  console.log("server listening");
});
