import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

interface RequestBody {
  name: string;
}

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATH, DELETE, GET");
    return res.status(200).send({});
  }
  next();
});

app.use("/carinho", require("./routes/carinhoRoute"));

app.listen(3042, () => console.log("Listening 3042"));
