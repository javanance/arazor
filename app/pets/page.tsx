// // pages/api/hello_worlds.js
// import postgres from "postgres";

// let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

// const conn = postgres({
//   host: PGHOST,
//   database: PGDATABASE,
//   username: PGUSER,
//   password: PGPASSWORD,
//   port: 5432,
//   ssl: "require",
// });

// function selectAll() {
//   return conn.query("SELECT * FROM Pet");
// }

import postgres from "postgres";

async function getData() {
  const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });

  const response = await sql`SELECT * from playing_with_neon`;
  console.log(response);
  return response;
}

export default async function Page() {
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

// import { Pool } from "pg";

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });

// async function getData() {
//   const client = await pool.connect();
//   console.log("client", client);
//   try {
//     // const response = await client.query("SELECT version()");
//     const response = await client.query("SELECT * from playing_with_neon");
//     console.log(response);
//     return response.rows;
//     // return response;
//   } finally {
//     client.release();
//   }
// }

// export default async function Page() {
//   console.log("Page");
//   const data = await getData();

//   return (
//     <>
//       <p>{data.length}</p>
//       <ul>
//         {data.map((col, i) => (
//           <li key={i}>{col.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
