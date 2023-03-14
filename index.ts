import fastifyCors from '@fastify/cors';
import { PrismaClient, User } from '@prisma/client';
import fastify from 'fastify';

const server = fastify();

server.register(fastifyCors, {
  origin: 'http://localhost:3000',
});

const prisma = new PrismaClient();

const register = async (data: User) => {
  const { email } = data;
  // data.password = bcrypt.hashSync(data.password, 8);
  let user = prisma.user.create({
    data,
  });
  // data.accessToken = await jwt.signAccessToken(user);

  return data;
};

const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

interface Signup {
  name: string;
  password: string;
  email: string;
}
server.post('/signup', async (request, reply) => {
  const { name, email, password } = JSON.parse(
    request.body as string
  ) as Signup;
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return user;
});

interface Signin {
  email: string;
  password: string;
}
server.post('/signin', async (request, reply) => {
  const { email, password } = JSON.parse(request.body as string) as Signin;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
});

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
