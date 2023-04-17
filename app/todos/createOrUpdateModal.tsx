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
import { ToDo } from "./page";

interface CreateOrUpdateProps {
  selectedItem?: Partial<ToDo>;
  isOpen: boolean;
  closeModal: Function;
  addItem: (title: string, description: string, completed: boolean) => void;
  updateItem: (
    id: string,
    title: string,
    description: string,
    completed: boolean
  ) => void;
  setModalToDo: (toDo?: Partial<ToDo>) => void;
}

const CreateOrUpdateModal = ({
  selectedItem,
  isOpen,
  closeModal,
  addItem,
  updateItem,
  setModalToDo,
}: CreateOrUpdateProps) => {
  const { id, title, description, completed } = selectedItem || {
    id: undefined,
    title: undefined,
    description: undefined,
    completed: false,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      // update existing
      updateItem(id, title!, description!, !!completed);
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
          <ModalHeader>{id ? "Edit To-Do" : "Create To-Do"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb="0.5em" isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Title"
                // Use default for initial render, changes after that are cleared on close
                defaultValue={title}
                onChange={(event) =>
                  setModalToDo({
                    id,
                    title: event.currentTarget.value,
                    description,
                    completed,
                  })
                }
              />
            </FormControl>
            <FormControl mb="1em" isRequired>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Description of task"
                // Use default for initial render, changes after that are cleared on close
                defaultValue={description}
                onChange={(event) =>
                  setModalToDo({
                    id,
                    title,
                    description: event.currentTarget.value,
                    completed,
                  })
                }
              />
            </FormControl>
            <FormControl mb="0.5em">
              <Checkbox
                size="md"
                color="telegram.400"
                textColor="black"
                defaultChecked={completed}
                isChecked={completed}
                onChange={(event) =>
                  setModalToDo({
                    id,
                    title,
                    description,
                    completed: event.currentTarget.checked,
                  })
                }
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
