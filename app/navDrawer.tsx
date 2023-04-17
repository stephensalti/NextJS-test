"use client";
import { HamburgerIcon, InfoIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  Icon,
  IconButton,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { RiTodoFill } from "react-icons/ri";

/** Note: This component serves as a shared navigation drawer to be rendered across all pages.
By rendering this inside of the root-level `layout` component, NextJS ensures that all pages display this feature
 It's instance and state are shared between pages as well. If you don't want this behavior, a template should be used instead.  */
const NavDrawer = () => {
  // useDisclosure is a chakra hook for managing the open/close state of a component
  const { isOpen, onToggle } = useDisclosure();

  const ToggleDrawerButton = ({ alignSelf = "start" }) => (
    <IconButton
      aria-label="Toggle Navigation Menu"
      colorScheme="telegram"
      onClick={onToggle}
      icon={<HamburgerIcon />}
      size="lg"
      alignSelf={alignSelf}
      margin="2px 2px 0 2px"
    />
  );

  return (
    <div>
      <ToggleDrawerButton />
      <Drawer
        isOpen={isOpen}
        onClose={onToggle}
        placement="left"
        colorScheme="telegram"
        closeOnEsc={true}
        size="xs"
      >
        <DrawerContent>
          <ToggleDrawerButton alignSelf="end" />
          <DrawerBody padding="0">
            <List colorScheme="telegram">
              <Link
                href="/"
                fontSize="xl"
                color="telegram.400"
                paddingLeft="0.5em"
              >
                <ListItem _hover={{ bgColor: "whitesmoke" }}>
                  <Icon
                    boxSize="1.25em"
                    as={AiFillHome}
                    marginLeft="0.25em"
                    marginRight="0.5em"
                    verticalAlign="sub"
                  />
                  Home
                </ListItem>
              </Link>
              <Link
                href="/todos"
                fontSize="xl"
                color="telegram.400"
                paddingLeft="0.5em"
              >
                <ListItem _hover={{ bgColor: "whitesmoke" }}>
                  <Icon
                    boxSize="1.25em"
                    as={RiTodoFill}
                    marginLeft="0.25em"
                    marginRight="0.5em"
                    verticalAlign="sub"
                  />
                  To-Do's
                </ListItem>
              </Link>
              <Link
                href="/docs"
                fontSize="xl"
                color="telegram.400"
                paddingLeft="0.5em"
              >
                <ListItem _hover={{ bgColor: "whitesmoke" }}>
                  <Icon
                    boxSize="1.25em"
                    as={InfoIcon}
                    marginLeft="0.25em"
                    marginRight="0.5em"
                    verticalAlign="sub"
                  />
                  Docs
                </ListItem>
              </Link>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
