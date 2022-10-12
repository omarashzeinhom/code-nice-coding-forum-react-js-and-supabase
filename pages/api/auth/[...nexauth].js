import neo4j from "neo4j-driver";
import { Neo4jAdapter } from "@next-auth/neo4j-adapter";
import NextAuth from "next-auth/next";

const driver = neo4j.driver (
    "neo4j+s://231269a5.databases.neo4j.io" , // bolt db for auradb in neo4j check docs +s// bolt://(unencrypted) and bolt+s:// (encrypted with TLS)
    neo4j.auth.basic("neo4j","password")
);
    


//initalize session 

const neo4jsession = driver.session();

export default NextAuth({
        // https://next-auth.js.org/configuration/providers
        providers: [
            //add providers here for nextAuth github , facebook, linkedin.
        ],
        adapter: Neo4jAdapter(neo4jsession),
})


/***References
 * 
 * 1. [Connect to a Neo4j DBMS](https://neo4j.com/docs/browser-manual/current/operations/dbms-connection/)
 * 2. [](https://next-auth.js.org/adapters/models)
 */