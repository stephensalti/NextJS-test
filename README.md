# To-Do App

## About

This app was created using NextJS 13, Chakra-UI, and GraphQL-Yoga. It is a quick and dirty "to-do" app intended only to serve as
an example for working with these tools, so it is nowhere near perfect. It features a simple "todos" page that allows you to view, create, update, and delete to-do's. All operations performed on this page issue a query or mutation to the
graphql-yoga server. A "docs" page is also available, with links to useful information on these technologies provided. 

## Installation and Startup

1. Follow these steps to get the application started for the first time:

1. `npm install`
1. `npx prisma migrate dev` (Generates and applies the necessary Prisma migrations to create the required tables in your local database)

Start the application with:

1. `npm run dev`

Navigate to `localhost:3000`
