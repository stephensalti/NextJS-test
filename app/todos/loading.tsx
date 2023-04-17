/**
 * This component utilizes a new feature added to NextJS-13: Loading UI - https://beta.nextjs.org/docs/routing/loading-ui
 * Naming this file "loading" will automatically render whatever is placed in here INSTEAD OF the contents of "page.tsx" for this route.
 * Once the content of the route segment (page.tsx) finishes loading, it will replace this content.
 */
"use client";
import { Center, Spinner } from "@chakra-ui/react";

const Loading = () => (
  <Center margin="1em">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="telegram.400"
      size="xl"
      alignSelf="center"
    />
  </Center>
);

export default Loading;