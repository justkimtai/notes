import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// Declare a global type for PrismaClient to avoid multiple instances in development
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Use a singleton pattern to initialize PrismaClient
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient(); // Single instance in production
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient(); // Initialize only if not already initialized
  }
  prisma = global.prisma; // Use the globally cached instance
}

export default prisma;
