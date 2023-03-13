import { PrismaClient, User } from '@prisma/client';
// import bcrypt from 'bcryptjs';
// import jwt from '../utils/jwt.js';

const prisma = new PrismaClient();

require('dotenv').config();

class AuthService {
  // static async register(data: User) {
  //   const { email } = data;
  //   // data.password = bcrypt.hashSync(data.password, 8);
  //   let user = prisma.user.create({
  //     data,
  //   });
  //   data.accessToken = await jwt.signAccessToken(user);

  //   return data;
  // }

  // static async login(data: User) {
  //   const { email, password } = data;
  //   const user = await prisma.user.findUnique({
  //     where: {
  //       email,
  //     },
  //   });
  //   if (!user) {
  //     throw createError.NotFound('User not registered');
  //   }
  //   const checkPassword = bcrypt.compareSync(password, user.password);
  //   if (!checkPassword)
  //     throw createError.Unauthorized('Email address or password not valid');
  //   delete user.password;
  //   const accessToken = await jwt.signAccessToken(user);
  //   return { ...user, accessToken };
  // }

  // static async all() {
  //   const allUsers = await prisma.user.findMany();
  //   return allUsers;
  // }
}

export default AuthService;
