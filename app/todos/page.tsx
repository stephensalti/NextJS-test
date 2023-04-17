"use client";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { deleteToDo, postToDo, updateToDo } from "../data/graphql";
import ToDosContainer from "./toDosContainer";

export interface ToDo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const TodosPage = () => {
  const [toDos, setToDos] = useState(new Map());
  const [modalToDo, setModalToDo] = useState<ToDo | undefined>();
  
  const {
    isOpen: isModalOpen,
    onOpen: openModal,
    onClose,
  } = useDisclosure();

  // Ensures that changes to modal fields are reset upon closing
  const closeModal = () => {
    setModalToDo(undefined);
    onClose();
  };

  const deleteItem = async (id: string) => {
    await deleteToDo(id);
    const newState = new Map(toDos);
    newState.delete(id);
    setToDos(newState);
  };
  
  const addItem = async (title: string, description: string, completed: boolean) => {
    const newToDo: ToDo = await postToDo(title, description, completed);
    const newState = new Map(toDos);
    newState.set(newToDo.id, newToDo);
    setToDos(newState);
  };
  
  const updateItem = async (id: string, title: string, description: string, completed: boolean) => {
    const newToDo: ToDo = await updateToDo(id, title, description, completed);
    const newState = new Map(toDos);
    newState.set(newToDo.id, newToDo);
    setToDos(newState);
  };

  return (
    <ToDosContainer
      toDos={toDos}
      setToDos={setToDos}
      isModalOpen={isModalOpen}
      openModal={openModal}
      closeModal={closeModal}
      setModalToDo={setModalToDo}
      modalToDo={modalToDo}
      deleteItem={deleteItem}
      addItem={addItem}
      updateItem={updateItem}
    />
  );
};

export default TodosPage;
