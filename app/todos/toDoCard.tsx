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
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import CreateOrUpdateModal from "./createOrUpdateModal";
import { ToDo } from "./page";

interface ToDoCardProps {
  toDoItems: ToDo[];
  cardName: string;
  deleteItem: Function;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: Function;
  loading: boolean;
  addItem: (title: string, description: string, completed: boolean) => void;
  setModalToDo: (toDo: ToDo) => void;
  modalToDo?: ToDo;
  updateItem: (id: string, title: string, description: string, completed: boolean) => void;
}

const ToDoCard = ({
  toDoItems,
  cardName,
  deleteItem,
  isModalOpen,
  openModal,
  closeModal,
  loading,
  addItem,
  setModalToDo,
  modalToDo,
  updateItem,
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
          {loading ? (
            <Center>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="telegram.400"
                size="xl"
                alignSelf="center"
              />
            </Center>
          ) : (
            <List>{toDoListItems}</List>
          )}
        </AccordionPanel>
      </Card>
      <CreateOrUpdateModal
        closeModal={closeModal}
        isOpen={isModalOpen}
        selectedItem={modalToDo}
        addItem={addItem}
        updateItem={updateItem}
      />
    </div>
  );
};

export default ToDoCard;
