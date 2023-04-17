/**
 * This layout will render the "to-dos" header as well as the container div that is responsible for centering the body contents of the to-dos route.
 */
"use client";
import { Heading } from "@chakra-ui/react";

const ToDosLayout = ({ children }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <Heading textAlign="center">To-Do's:</Heading>
    {children}
  </div>
);

export default ToDosLayout;
