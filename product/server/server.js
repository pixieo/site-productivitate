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

// app.get("/articlesPreview", async (req, res) => {
//   const tagTitle = req.query.tagTitle;

//   try {
    // const articlesPreview = await client.query(
    //   `SELECT a.title, a.preview 
    //   FROM Articles a
    //   JOIN ArticleTags at ON a.id = at.article_id
    //   JOIN Tags t ON at.tag_id = t.id
    //   WHERE t.title = $1
    //   ORDER BY created_at DESC LIMIT 3`,
    //   [tagTitle]
    // );

//     res.json(articlesPreview.rows);
//   } catch (err) {
//     console.error(`Error `, err);
//     res.status(500).send("Server error");
//   }
// });

app.get('/articlesPreview', async (req, res) => {
  const tagTitle = req.query.tagTitle;

  console.log(`Received tag title: ${tagTitle}`);

  if (!tagTitle) {
    console.error('Tag title is required');
    return res.status(400).send('Tag title is required');
  }

  try {
    const query = `SELECT a.title, a.preview 
    FROM Articles a
    JOIN ArticleTags at ON a.id = at.article_id
    JOIN Tags t ON at.tag_id = t.id
    WHERE t.title = $1
    ORDER BY created_at DESC LIMIT 3`;

    console.log('Executing query:', query, 'with tagTitle:', tagTitle);

    const result = await client.query(query, [tagTitle]);

    console.log('Query result:', result.rows);

    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching articles:', err);
    res.status(500).send('Server error');
  }
});


app.get("/services", async (req, res) => {
  try {
    const services = await client.query("SELECT * FROM Services");

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
