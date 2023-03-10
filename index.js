"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("@fastify/cors"));
const client_1 = require("@prisma/client");
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)();
server.register(cors_1.default, {
    origin: 'http://localhost:3000',
});
const prisma = new client_1.PrismaClient();
const register = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = data;
    // data.password = bcrypt.hashSync(data.password, 8);
    let user = prisma.user.create({
        data,
    });
    // data.accessToken = await jwt.signAccessToken(user);
    return data;
});
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    return users;
});
server.post('/register', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = JSON.parse(request.body);
    const user = yield prisma.user.create({
        data: {
            name,
            email,
            password,
        },
    });
    return user;
}));
server.get('/users', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield getUsers();
    return users;
}));
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
