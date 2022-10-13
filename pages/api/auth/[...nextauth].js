import neo4j from "neo4j-driver";
import { Neo4jAdapter } from "@next-auth/neo4j-adapter";
import NextAuth from "next-auth/next";

const driver = neo4j.driver(
  "neo4j+s://231269a5.databases.neo4j.io", // bolt db for auradb in neo4j check docs +s// bolt://(unencrypted) and bolt+s:// (encrypted with TLS)
  neo4j.auth.basic("neo4j", "K0mV6KX8O-wLFUoOq9y-jpEcfKaqGbzKFpvx0g8WLCk")
);

//initalize session

const neo4jsession = driver.session();

export default NextAuth({
  providers: [
    //ADD providers here for nextAuth github , facebook, linkedin.
    // LINK : https://next-auth.js.org/configuration/providers
    //TODO ADD GITHUB LOGIN
    //TODO ADD GOOGLE LOGIN
  ],
  adapter: Neo4jAdapter(neo4jsession),
  pages: {
    signIn: "pages/login",
    signOut: "pages/logout",
    error: "pages/error404", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
});

/***References
 *
 * 1. [Connect to a Neo4j DBMS](https://neo4j.com/docs/browser-manual/current/operations/dbms-connection/)
 * 2. [](https://next-auth.js.org/adapters/models)
 */
