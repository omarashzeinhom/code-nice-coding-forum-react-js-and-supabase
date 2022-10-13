# StackOverFlow Clone in Next.js and Neo4j

## Start By

```yarn dev```

### Packages Installed

1. [neo4j-driver]()

```yarn add neo4j-driver```

2. [nextAuth.js -Neo4j getting Started](https://next-auth.js.org/adapters/neo4j)
3. [nextAuth.js -Models](https://next-auth.js.org/adapters/models)

```yarn add next-auth @next-auth/neo4j-adapter neo4j-driver```

How TO IMPLMENT NEXT AUTH

```js
//Server - in /pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // Passwordless / email sign in
    EmailProvider({
      server: process.env.MAIL_SERVER,
      from: 'NextAuth.js <no-reply@example.com>'
    }),
  ]
})
```

```js
///Client APP pages/_app.jsx
import { SessionProvider } from "next-auth/react"

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}
```

```js
//in index.js
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}
```

#### Handling Errors

1. [MISSING_NEXTAUTH_API_ROUTE_ERROR - Next Auth js Docs](https://next-auth.js.org/errors#missing_nextauth_api_route_error)

#### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

##### References

###### BackEnd

1. [Authentication - Neo4j Docs](https://neo4j.com/docs/graphql-manual/current/auth/authentication/)
2. [Connect to a Neo4j DBMS - Neo4j Docs](https://neo4j.com/docs/browser-manual/current/operations/dbms-connection/)
3. [Query parameters - Neo4j Docs](https://neo4j.com/docs/browser-manual/current/operations/query-parameters/)

###### Front End

1. [MUI React - Default installation](https://mui.com/material-ui/getting-started/installation/#default-installation)
```yarn add @mui/material @emotion/react @emotion/styled```
2. [When and how to use tree-shaking? in  MUI](https://mui.com/material-ui/guides/minimizing-bundle-size/)
```//tree-shakingimport { Button, TextField } from '@mui/material';```
3. [App Bar - MUI Docs](https://mui.com/material-ui/react-app-bar/)
4. Icons [MUI Icons Instllation - MUI Docs](https://mui.com/material-ui/getting-started/installation/#icons)```yarn add @mui/icons-material```
5. [The sx prop  - MUI Docs](https://mui.com/system/getting-started/the-sx-prop/)
6. [Grid - MUI Docs](https://mui.com/material-ui/react-grid/)
7. [Button- MUI Docs](https://mui.com/material-ui/react-button/#main-content)
