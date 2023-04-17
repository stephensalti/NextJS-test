"use client";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { ToDo } from "./page";

interface CreateOrUpdateProps {
  selectedItem?: ToDo;
  isOpen: boolean;
  closeModal: Function;
  addItem: (title: string, description: string, completed: boolean) => void;
  updateItem: (id: string, title: string, description: string, completed: boolean) => void;
}

const CreateOrUpdateModal = ({
  selectedItem,
  isOpen,
  closeModal,
  addItem,
  updateItem,
}: CreateOrUpdateProps) => {
  const [title, setTitle] = useState(selectedItem?.title);
  const [description, setDescription] = useState(selectedItem?.description);
  const [completed, setCompleted] = useState(selectedItem?.completed);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedItem) {
      const updatedTitle = title ?? selectedItem.title;
      const updatedDesc = description ?? selectedItem.description;
      const updatedCompleted = completed !== undefined ? completed : selectedItem.completed;
      // update existing
      updateItem(selectedItem!.id, updatedTitle, updatedDesc, updatedCompleted)
    } else {
      // create new
      addItem(title as string, description as string, !!completed);
    }
    closeModal();
  };
  return (
    <Modal onClose={() => closeModal()} size="xl" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>
            {selectedItem ? "Edit To-Do" : "Create To-Do"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb="0.5em" isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Title"
                // Use default for initial render, changes after that are cleared on close
                defaultValue={selectedItem?.title}
                onChange={(event) => setTitle(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl mb="1em" isRequired>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Description of task"
                // Use default for initial render, changes after that are cleared on close
                defaultValue={selectedItem?.description}
                onChange={(event) => setDescription(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl mb="0.5em">
              <Checkbox
                size="md"
                color="telegram.400"
                textColor="black"
                defaultChecked={!!selectedItem?.completed}
                onChange={(event) => setCompleted(event.currentTarget.checked)}
              >
                Completed
              </Checkbox>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            {/* mr shorthand for marginRight */}
            <Button
              bgColor="telegram.400"
              textColor="white"
              mr={3}
              type="submit"
              disabled={!title || !description}
            >
              Save
            </Button>
            <Button onClick={() => closeModal()}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default CreateOrUpdateModal;
