// Import needed packages
import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
// import dotenv from "dotenv";
import ws from "ws";

// Use Prisma Client as normal
export default async function Prisma() {
  console.log("prisma1");
  // Setup
  // dotenv.config();
  neonConfig.webSocketConstructor = ws;
  // const connectionString = `${process.env.DATABASE_URL}`;
  const connectionString = process.env.DATABASE_URL;

  // Init prisma client
  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool);
  const prisma = new PrismaClient({ adapter });
  // const prisma = new PrismaClient();
  console.log("prisma", prisma);

  const allUsers = await prisma.pet.findMany();
  return (
    <div>
      <h1>Prisma</h1>
      {allUsers.map((row) => (
        <div key={row.id}>{row.email}</div>
      ))}
    </div>
  );
}
