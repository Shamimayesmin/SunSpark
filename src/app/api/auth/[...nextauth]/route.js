import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // }),
  ],
  async jwt({ token, user, account }) {
    // Persist the OAuth access_token to the token right after signin

    if (account) {
      token.id_token = account.id_token;
    }
    return token;
  },
  async session({ session, token }) {
    // Send properties to the client, like an access_token from a provider.
    session.id_token = token.id_token;
    console.log(session)
    return session;
  },
  secret: process.env.NEXTAUTH_SECRET,

})

export { handler as GET, handler as POST }
