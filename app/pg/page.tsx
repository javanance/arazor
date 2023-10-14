import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

async function getData() {
  const client = await pool.connect();
  console.log("client", client);
  try {
    // const response = await client.query("SELECT version()");
    const response = await client.query("SELECT * from playing_with_neon");
    console.log(response);
    return response.rows;
    // return response;
  } finally {
    client.release();
  }
}

export default async function Page() {
  console.log("Page");
  const data = await getData();

  return (
    <>
      <p>{data.length}</p>
      <ul>
        {data.map((col, i) => (
          <li key={i}>{col.name}</li>
        ))}
      </ul>
    </>
  );
}
