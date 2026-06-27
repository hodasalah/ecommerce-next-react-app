import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import NextAuth from 'next-auth'
import Auth0Provider from "next-auth/providers/auth0"
import FacebookProvider from 'next-auth/providers/facebook'
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import db from "../../../utils/db"
import User from "../../../models/User"
import clientPromise from "./lib/mongodb"

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        await db.connectDb()
        const user = await User.findOne({ email: credentials.email })
        if (!user) {
          throw new Error("No user found with this email.")
        }
        const isPasswordMatch = await bcrypt.compare(credentials.password, user.password)
        if (!isPasswordMatch) {
          throw new Error("Incorrect password.")
        }
        return user
      }
    }),
    // OAuth authentication providers...
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }), 
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER
    })

  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id.toString();
        token.role = user.role || "buyer";
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.JWT_SECRET
})