const express = require("express");
const cors = require("cors");
const { Client } = require("pg");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

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

app.get("/articles-preview", async (req, res) => {
  const tagTitle = req.query.tagTitle;

  if (!tagTitle) {
    console.error("Tag title is required");
    return res.status(400).send("Tag title is required");
  }

  try {
    const articlesPreview = await client.query(
      `SELECT a.img_url, a.title, a.preview 
    FROM Articles a
    JOIN ArticleTags at ON a.id = at.article_id
    JOIN Tags t ON at.tag_id = t.id
    WHERE t.title = $1
    ORDER BY created_at DESC LIMIT 3`,
      [tagTitle]
    );

    res.json(articlesPreview.rows);
  } catch (err) {
    console.error("Error fetching articles: ", err);
    res.status(500).send("Server error");
  }
});

app.get("/services", async (req, res) => {
  try {
    const services = await client.query("SELECT * FROM Services");

    res.json(services.rows);
  } catch (err) {
    console.error("Error fetching services: ", err);
    res.status(500).send("Server error");
  }
});

app.get("/blog-contents", async (req, res) => {
  try {
    const categories = [];
    const tags = await client.query(`SELECT * FROM tags;`);

    for (tag of tags.rows) {
      const articleTitles = await client.query(`
      SELECT id, title FROM articles
      INNER JOIN articletags ON id = article_id
      WHERE tag_id = ${tag.id}
      ORDER BY created_at DESC LIMIT 3;`);
      categories.push({ title: tag.title, articleTitles: articleTitles.rows });
    }

    const articles = await client.query(`
    SELECT a.id, a.img_url, a.title, a.preview, array_to_string(array_agg(t.title), ', ') AS tags
    FROM Articles a
    INNER JOIN ArticleTags at ON a.id = at.article_id
    INNER JOIN Tags t ON at.tag_id = t.id
    GROUP BY a.id, a.title, a.preview
    ORDER BY a.created_at DESC;`);

    res.json({
      categories: categories,
      articles: articles.rows,
    });
  } catch (err) {
    console.error("Error fetching articles by category: ", err);
    res.status(500).send("Server error");
  }
});

app.get("/article", async (req, res) => {
  try {
    const id = req.query.id;

    const article = await client.query(
      `SELECT title, content FROM articles WHERE id = $1`,
      [id]
    );

    res.json(article.rows[0]);
  } catch (err) {
    console.error("Error fetching articles by category: ", err);
    res.status(500).send("Server error");
  }
});

app.post("/create-customer", async (req, res) => {
  try {
    const { name, email, services } = req.body;

    const customerResult = await client.query(
      "INSERT INTO Clients(name, email, created_at) VALUES ($1, $2, NOW()) RETURNING id",
      [name, email]
    );

    const customerId = customerResult.rows[0].id;

    const servicePromises = services.map((service) => {
      return client.query(
        "INSERT INTO ClientServices(client_id, service_id) VALUES ($1, $2)",
        [customerId, service]
      );
    });

    await Promise.all[servicePromises];

    res.status(200).send("Customer inserted successfully");
  } catch (err) {
    console.error("Error inserting customer: ", err);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

process.on("exit", () => {
  client.end();
});
