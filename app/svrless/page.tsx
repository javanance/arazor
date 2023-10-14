// import { neon } from "@neondatabase/serverless";

// async function getData() {
//   console.log("Page1");
//   console.log("env", process.env.DATABASE_URL);
//   const sql = neon(process.env.DATABASE_URL);

//   const response = await sql`SELECT * from pet'`;
//   console.log(response);
//   return response;
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
import { neon } from "@neondatabase/serverless";

async function getData() {
  const sql = neon(process.env.DATABASE_URL);

  const response = await sql`SELECT version()`;
  console.log(response);
  return response;
}

export default async function Page() {
  const data = await getData();
}
