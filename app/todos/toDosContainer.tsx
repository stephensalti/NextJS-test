/**
 * This component was separated out from the parent page.tsx in order to 
 * perform the initial To-Dos fetch in combination with useState and useEffect.
 * The route component (page) seems to consider that an invalid use of hooks when executed there. 
 */
"use client";
import { Accordion, AccordionItem, Button } from "@chakra-ui/react";
import { isEqual } from "lodash";
import { useEffect } from "react";
import { getToDos } from "../data/graphql";
import CreateOrUpdateModal from "./createOrUpdateModal";
import { ToDo } from "./page";
import ToDoCard from "./toDoCard";

interface ToDoContainerProps {
  toDos: Map<string, ToDo>;
  setToDos: (toDos: Map<string, ToDo>) => void;
  deleteItem: Function;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  addItem: (title: string, description: string, completed: boolean) => void;
  setModalToDo: (toDo?: ToDo) => void;
  modalToDo?: Partial<ToDo>;
  updateItem: (id: string, title: string, description: string, completed: boolean) => void;
}

const ToDosContainer = ({
  toDos,
  setToDos,
  deleteItem,
  isModalOpen,
  openModal,
  closeModal,
  addItem,
  setModalToDo,
  modalToDo,
  updateItem,
}: ToDoContainerProps) => {
  // Setting state in the parent page.tsx component was causing errors.
  // useEffect also cannot have awaits directly inside unless they are placed in an async function declared inside the hook
  useEffect(() => {
    const fetchToDos = async () => {
      const results = await getToDos();
      const toDosMap = results.toDos.reduce((acc, task) => {
        return acc.set(task.id, task);
      }, new Map<string, ToDo>());

      if (!isEqual(toDos, toDosMap)) {
        setToDos(toDosMap);
      }
    };

    fetchToDos().catch(console.error);
  }, [toDos]);

  const toDoItems = toDos
    ? Array.from<ToDo>(toDos.values()).filter((task) => !task.completed)
    : [];
  const completedItems = toDos
    ? Array.from<ToDo>(toDos.values()).filter((task) => task.completed)
    : [];
  return (
    <>
      <Accordion width="60%" defaultIndex={[0]} allowMultiple>
        <AccordionItem border="none">
          <ToDoCard
            toDoItems={toDoItems}
            cardName="Scheduled:"
            deleteItem={deleteItem}
            openModal={openModal}
            setModalToDo={setModalToDo}
          />
        </AccordionItem>
        <AccordionItem border="none">
          <ToDoCard
            toDoItems={completedItems}
            cardName="Completed:"
            deleteItem={deleteItem}
            openModal={openModal}
            setModalToDo={setModalToDo}
          />
        </AccordionItem>
      </Accordion>
      <Button
        bgColor="telegram.400"
        mb="0.5em"
        textColor="white"
        onClick={() => {
          // clear form fields first!
          setModalToDo(undefined);
          openModal();
        }}
      >
        CREATE
      </Button>
      <CreateOrUpdateModal
        closeModal={closeModal}
        isOpen={isModalOpen}
        selectedItem={modalToDo}
        addItem={addItem}
        updateItem={updateItem}
        setModalToDo={setModalToDo}
      />
    </>
  );
};

export default ToDosContainer;
