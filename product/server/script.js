const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "balance",
  password: "2499",
  port: 5432,
});

async function createTables() {
  await client.connect();

  const createClientsTable = `
        CREATE TABLE IF NOT EXISTS Clients (
            id SERIAL PRIMARY KEY,
            name VARCHAR(225) NOT NULL,
            email VARCHAR(225) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

  const createServicesTable = `
        CREATE TABLE IF NOT EXISTS Services (
            id VARCHAR(225) PRIMARY KEY NOT NULL,
            title VARCHAR(225) NOT NULL UNIQUE,
            preview TEXT NOT NULL
        );
    `;

  const createClientServicesTable = `
        CREATE TABLE IF NOT EXISTS ClientServices (
            client_id INT REFERENCES Clients(id),
            service_id VARCHAR(225) REFERENCES Services(id),
            PRIMARY KEY(client_id, service_id)
        );
    `;

  const createArticlesTable = `
        CREATE TABLE IF NOT EXISTS Articles (
            id SERIAL PRIMARY KEY,
            title VARCHAR(225) NOT NULL,
            content TEXT NOT NULL,
            preview TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

  const createTagsTable = `
        CREATE TABLE IF NOT EXISTS Tags (
            id SERIAL PRIMARY KEY,
            title VARCHAR(225) NOT NULL
        )
    `;

  const createArticleTagsTable = `
        CREATE TABLE IF NOT EXISTS ArticleTags (
            article_id INT REFERENCES Articles(id),
            tag_id INT REFERENCES Tags(id),
            PRIMARY KEY (article_id, tag_id)
        );
    `;

  const createStaticContentTable = `
        CREATE TABLE IF NOT EXISTS StaticContent (
            id VARCHAR(225) PRIMARY KEY NOT NULL,
            title VARCHAR(225) NOT NULL,
            content TEXT NOT NULL
        );
    `;

  try {
    await client.query("DROP TABLE IF EXISTS Clients CASCADE;");
    await client.query("DROP TABLE IF EXISTS Services CASCADE;");
    await client.query("DROP TABLE IF EXISTS ClientServices CASCADE;");
    await client.query("DROP TABLE IF EXISTS Articles CASCADE;");
    await client.query("DROP TABLE IF EXISTS Tags CASCADE;");
    await client.query("DROP TABLE IF EXISTS ArticleTags CASCADE;");
    await client.query("DROP TABLE IF EXISTS StaticContent CASCADE;");

    await client.query(createClientsTable);
    await client.query(createServicesTable);
    await client.query(createClientServicesTable);
    await client.query(createArticlesTable);
    await client.query(createTagsTable);
    await client.query(createArticleTagsTable);
    await client.query(createStaticContentTable);

    console.log("Tables created successfully, my little princess!");
  } catch (err) {
    console.error("Error creating tables: ", err);
  } finally {
    await client.end();
  }
}

createTables();
