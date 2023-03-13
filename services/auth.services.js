"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
// import bcrypt from 'bcryptjs';
// import jwt from '../utils/jwt.js';
const prisma = new client_1.PrismaClient();
require('dotenv').config();
class AuthService {
}
exports.default = AuthService;
