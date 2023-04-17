/**
 * In NextJS 13, any component named "page" is considered a route in your application.
 * Since this is at the route of the "app" directory, this UI is rendered for '/'.
 */
"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export default function MainPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Heading size="2xl" textAlign="center">
        Welcome!
      </Heading>
      <Card width="50%" marginTop="0.5em" marginBottom="1em">
        <CardHeader>
          <Heading size="lg">About this To-Do App:</Heading>
        </CardHeader>
        <CardBody>
          <p>
            This app was created using <b>NextJS 13, Chakra-UI</b>, and{" "}
            <b>GraphQL-Yoga</b>. It is a simple "to-do" app intended to serve as
            an example for building with these tools.
          </p>
          <Divider mt="1em" mb="1em" />
          <Heading mb="0.5em" size="md">
            Functionalities:
          </Heading>
          <UnorderedList>
            <ListItem>
              To-Do's Page:
              <UnorderedList>
                <ListItem>
                  View, create, edit, and update to-do's using a few simple
                  components provided by Chakra-Ui.
                </ListItem>
                <ListItem>
                  All operations performed issue a query or mutation to the
                  graphql-yoga server.
                </ListItem>
                <ListItem>
                  GraphQL Yoga server is setup to listen via an API route, a
                  feature provided by NextJS.
                </ListItem>
                <ListItem>
                  All to-do's are stored in a simple database powered by
                  SQL-Lite. The GraphQL-Yoga resolvers hook into this database
                  using <b>Prisma</b>, a database client built around a schema
                  you provide.
                </ListItem>
                <ListItem>
                  Page uses the new Loading UI feature of NextJS 13, which adds
                  instand loading state to the page until the page contents
                  finish loading in.
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Docs Page:
              <UnorderedList>
                <ListItem>
                  View a list of external sites that are useful in learning
                  to develop with these tools.
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Shared Navigation Drawer:
              <UnorderedList>
                <ListItem>
                  The navigation drawer utilizes the "layout" feature of NextJS.
                </ListItem>
                <ListItem>
                  The component is rendered in the root-level layout, meaning it is
                  rendered on all pages and preserves state.
                </ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </CardBody>
      </Card>
    </div>
  );
}
