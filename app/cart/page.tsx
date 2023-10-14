import { sql } from "@vercel/postgres";

export default async function Cart() {
  const { rows } = await sql`SELECT * from Pet`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>{row.name}</div>
      ))}
    </div>
  );
}
