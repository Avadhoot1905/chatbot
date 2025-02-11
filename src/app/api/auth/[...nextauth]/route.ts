import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { adapter } from "next/dist/server/web/adapter";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(Prisma),
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID ?? '',
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
        }),
    ],
};

export const handler = NextAuth(authOptions);

export { handler as GET , handler as POST };
