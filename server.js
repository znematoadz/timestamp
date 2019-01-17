let express = require("express");

let cors = require("cors");

let app = express();

app.use(cors());

app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", (req, res) => res.sendFile(process.cwd() + "/views/index.html"));

app.get("/api/timestamp/:date_string?", (req, res, next) => {
  let date;
  if (req.params.date_string !== undefined) {
    let unix = parseInt(req.params.date_string * 1);
    if (isNaN(unix)) {
      date = new Date(req.params.date_string);
    } else {
      date = new Date(unix);
    }
  } else {
    date = new Date(Date.now());
  }

  let data =
    date == "Invalid Date"
      ? { error: "Invalid Date" }
      : { unix: date.getTime(), utc: date.toUTCString() };
  res.json(data);
});

app.listen(process.env.PORT || 3000, () => console.log("serving..."));
