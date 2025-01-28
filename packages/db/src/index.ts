// packages/db/src/db.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
export type { PrismaClient };
