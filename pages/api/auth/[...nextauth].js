import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import NextAuth from 'next-auth'
import Auth0Provider from "next-auth/providers/auth0"
import FacebookProvider from 'next-auth/providers/facebook'
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import clientPromise from "./lib/mongodb"

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
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
    }), Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER
    })

  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.JWT_SECRET
})