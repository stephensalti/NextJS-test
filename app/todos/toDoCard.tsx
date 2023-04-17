"use client";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Heading,
  HStack,
  IconButton,
  List,
  ListItem,
} from "@chakra-ui/react";
import { ToDo } from "./page";

interface ToDoCardProps {
  toDoItems: ToDo[];
  cardName: string;
  deleteItem: Function;
  openModal: () => void;
  setModalToDo: (toDo: ToDo) => void;
}

const ToDoCard = ({
  toDoItems,
  cardName,
  deleteItem,
  openModal,
  setModalToDo,
}: ToDoCardProps) => {
  const toDoListItems = toDoItems.map((task, index) => {
    return (
      <ListItem key={index}>
        <Card marginTop="0.25em" marginBottom="0.25em">
          {/* The stack element below is used to group elements evenly in a horizontal fashion */}
          <HStack>
            <CardHeader width="20%">
              <Heading size="sm">{task.title}</Heading>
            </CardHeader>
            <Center height="80%">
              <Divider orientation="vertical" width="2px" color="red" />
            </Center>
            <CardBody>{task.description}</CardBody>
            <IconButton
              aria-label="Edit Todo"
              color="telegram.400"
              icon={<EditIcon />}
              onClick={() => {
                openModal();
                setModalToDo(task);
              }}
            />
            <IconButton
              aria-label="Delete Todo"
              color="red.400"
              icon={<DeleteIcon />}
              onClick={() => deleteItem(task.id)}
              marginRight="0.5em !important"
            />
          </HStack>
        </Card>
      </ListItem>
    );
  });

  return (
    <div>
      <Card
        marginTop="1em"
        marginBottom="1em"
        border="1px"
        borderColor="telegram.100"
      >
        <AccordionButton
          // Change the background color when hovering or when accordion is expanded
          _expanded={{ bg: "telegram.100" }}
          _hover={{ bg: "telegram.100" }}
        >
          <Heading flex="1" textAlign="left" size="md">
            {cardName}
          </Heading>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <List>{toDoListItems}</List>
        </AccordionPanel>
      </Card>
    </div>
  );
};

export default ToDoCard;
