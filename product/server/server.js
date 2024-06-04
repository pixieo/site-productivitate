const express = require("express");
const cors = require("cors");
const { Client } = require("pg");

const app = express();
const port = 3001;

app.use(cors());

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "balance",
  password: "2499",
  port: 5432,
});

client.connect();

app.get("/static-content/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await client.query(
      "SELECT * FROM StaticContent WHERE id = $1",
      [id]
    );
    const staticContent = result.rows[0];

    if (staticContent) {
      res.json(staticContent);
    } else {
      res.status(404).send("Content not found");
    }
  } catch (err) {
    console.error(`Error fetching static content with id ${id}:`, err);
    res.status(500).send("Server error");
  }
});

app.get("/articlesPreview", async (req, res) => {
  try {
    const articlesPreview = await client.query(
      "SELECT title, preview FROM Articles ORDER BY created_at DESC LIMIT 3"
    );

    res.json(articlesPreview.rows);
  } catch (err) {
    console.error(`Error `, err);
    res.status(500).send("Server error");
  }
});

app.get("/services", async (req, res) => {
  try {
    const services = await client.query("SELECT title, preview FROM Services");

    res.json(services.rows);
  } catch (err) {
    console.error(`Error fetching services `, err);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

process.on("exit", () => {
  client.end();
});
