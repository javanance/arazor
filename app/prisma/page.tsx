import { PrismaClient } from "@prisma/client";

export default async function Prisma() {
  console.log("prisma1");
  const prisma = new PrismaClient();
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
