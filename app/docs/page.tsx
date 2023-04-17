"use client";
import {
  Card,
  CardBody,
  Divider,
  Heading,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Fragment } from "react";

const DocsPage = () => {
  const links: Readonly<[string, string]>[] = [
    [
      "NextJS-13 'App' Structure",
      "https://beta.nextjs.org/docs/routing/fundamentals",
    ],
    [
      "NextJS Layouts and Templates",
      "https://beta.nextjs.org/docs/routing/pages-and-layouts",
    ],
    [
      "NextJS Client-Side vs Server-Side Components",
      "https://beta.nextjs.org/docs/rendering/server-and-client-components",
    ],
    ["GraphQL-Yoga", "https://the-guild.dev/graphql/yoga-server/docs"],
    ["Chakra-UI", "https://chakra-ui.com/"],
  ];
  const linkMap = new Map(links);
  const docLinks = Array.from(linkMap.keys()).map((title, index) => {
    const href = linkMap.get(title)!;
    return (
      <Fragment key={index} >
        <LinkBox
          fontSize="xl"
          color="telegram.400"
          paddingLeft="0.5em"
          _hover={{ bgColor: "whitesmoke" }}
          pt="0.5em"
          pb="0.5em"
        >
          <LinkOverlay href={href} isExternal>
            <ListItem>{title}</ListItem>
          </LinkOverlay>
        </LinkBox>
        <Divider />
      </Fragment>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Heading size="2xl" textAlign="center">
        Helpful Docs
      </Heading>
      <Card width="50%" marginTop="1em" marginBottom="1em">
        <CardBody p="0">
          <List colorScheme="telegram" textAlign="center">
            {docLinks}
          </List>
        </CardBody>
      </Card>
    </div>
  );
};

export default DocsPage;
