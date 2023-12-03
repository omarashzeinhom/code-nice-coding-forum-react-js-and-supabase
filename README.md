markdownCopy code

# 🚀 StackOverFlow Clone in Next.js, Redux & Supabase.

## 📋 TODOS

- MATCH profiles to Questions
- MATCH Each Question to Tags using question_tags
- DISPLAY USER AVATAR FROM SUPABASE IN NAVBAR

## 🚀 Start By

Run `yarn dev`

### 📦 Packages Installed

1. [Quickstart - Supabase js](https://supabase.com/docs/guides/with-nextjs)
2. [@supabase/supabase-js](https://yarnpkg.com/package/@supabase/supabase-js)

```sh
   yarn add @supabase/supabase-js
```

1.  [@supabase/auth-helpers-nextjs](https://yarnpkg.com/package/@supabase/auth-helpers-nextjs)

```sh
yarn add @supabase/auth-helpers-nextjs
```

### ❓ Handling Errors

### 📖 NextJS Docs

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Nested Middleware - Next.js Documentation](https://nextjs.org/docs/messages/nested-middleware)
- [Existing projects migrate from JS to TS](https://nextjs.org/docs/basic-features/typescript)

### 📚 References

#### SUPABASE BACKEND

1.  [Create data: insert()](https://supabase.com/docs/reference/javascript/insert)

2.  [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

3.  [Fetch data: select()](https://supabase.com/docs/reference/javascript/select)

4.  [Executing SQL using plv8](https://supabase.com/docs/guides/database/extensions/plv8#executing-sql) Executing SQL You can execute SQL within plv8 code using the plv8.execute function.

    ```plv8

    create or replace function update_user(id bigint, first_name text)
    returns smallint as $$
        var num_affected = plv8.execute(
            'update profiles set first_name = $1 where id = $2',
            [first_name, id]
        );
        return num_affected;

    ```

5.  [Supabase in Next.js returning an empty array when data is in relevant tables](https://stackoverflow.com/questions/71294440/supabase-in-next-js-returning-an-empty-array-when-data-is-in-relevant-tables)

### 🎨 Front End

1.  [MUI React - Default installation](https://mui.com/material-ui/getting-started/installation/#default-installation) `yarn add @mui/material @emotion/react @emotion/styled`
2.  [When and how to use tree-shaking? in MUI](https://mui.com/material-ui/guides/minimizing-bundle-size/) `//tree-shakingimport { Button, TextField } from '@mui/material';`
3.  [App Bar - MUI Docs](https://mui.com/material-ui/react-app-bar/)
4.  Icons [MUI Icons Installation - MUI Docs](https://mui.com/material-ui/getting-started/installation/#icons)`yarn add @mui/icons-material`
5.  [The sx prop - MUI Docs](https://mui.com/system/getting-started/the-sx-prop/)
6.  [Grid - MUI Docs](https://mui.com/material-ui/react-grid/)
7.  [Button- MUI Docs](https://mui.com/material-ui/react-button/#main-content)
8.  [Card - MUI Docs](https://mui.com/material-ui/react-card/)
9.  [Fragments - React Docs](https://reactjs.org/docs/fragments.html)
10. [Colors - MUI Docs](https://mui.com/material-ui/customization/color/#main-content)
11. [Alert - MUI Docs](https://mui.com/material-ui/api/alert/)

### 📄 Various Docs

1.  [Encryption Key Generator](https://www.allkeysgenerator.com/Random/Security-Encryption-Key-Generator.aspx)
2.  [Next.js Redirect from / to another page](https://stackoverflow.com/questions/58173809/next-js-redirect-from-to-another-page)
3.  [Next.js Environment Variables](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables)
4.  [Resolving a merge conflict using the command line](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)

### 🔙 BackEnd OLD ONE

1.  [Authentication - Neo4j Docs](https://neo4j.com/docs/graphql-manual/current/auth/authentication/)
2.  [Connect to a Neo4j DBMS - Neo4j Docs](https://neo4j.com/docs/browser-manual/current/operations/dbms-connection/)
3.  [Query parameters - Neo4j Docs](https://neo4j.com/docs/browser-manual/current/operations/query-parameters/)
