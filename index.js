import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/transactions", async (req, res) => {
  const { transactions } = req.body;
  console.log("Received transactions from Website 1:", transactions);

  try {
    await axios.post(
      "https://trading-protocol-website3-backend.onrender.com/api/display-transactions",
      {
        transactions,
      }
    );
    res.status(200).json({ message: "Transactions forwarded!" });
  } catch (error) {
    console.error("Error forwarding transactions:", error);
    res.status(500).json({ message: "Error forwarding transactions" });
  }
});

app.listen(5001, () =>
  console.log("🚀 Website 2 Middleware running on port 5001")
);
