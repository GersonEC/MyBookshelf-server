import fastifyCors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';
import fastify from 'fastify';

const server = fastify();

server.register(fastifyCors, {
  origin: 'http://localhost:3000',
});

const prisma = new PrismaClient();

const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

server.get('/users', async (request, reply) => {
  const users = await getUsers();

  return users;
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
