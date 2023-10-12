import { sql } from "@vercel/postgres";

export default async function Cart({ params }) {
  const { rows } = await sql`SELECT * from pets`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>{row.name}</div>
      ))}
    </div>
  );
}
