import { ModalContainer, ModalContent } from "./style";
import { Contact } from "../../types/Contacts";
import { useState } from "react";
import { Form } from "../../pages/Contacts/style";
import { ButtonComponent } from "../Button";
import { apiBase } from "../../utils/baseUrl";

export const Modal = ({
  show,
  contact,
}: {
  show: boolean;
  contact: Contact;
}) => {
  const [contactUpdate, setContactUpdate] = useState<Contact>(contact);
  const [showModal, setShowModal] = useState(show);

  function handleUpdateContact() {
    apiBase.put(`/contacts/${contact.id}/`, contactUpdate).catch((error) => {
      console.log(error);
    });
    setShowModal(false);
  }

  return (
    <>
      {showModal && contact && (
        <ModalContainer show={showModal}>
          <ModalContent>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdateContact();
              }}
            >
              <label>Nome:</label>
              <input
                type="text"
                value={contactUpdate.name}
                onChange={(e) =>
                  setContactUpdate({ ...contactUpdate, name: e.target.value })
                }
              />
              <br />
              <label>Email:</label>
              <input
                type="email"
                value={contactUpdate.email}
                onChange={(e) =>
                  setContactUpdate({
                    ...contactUpdate,
                    email: e.target.value,
                  })
                }
              />
              <br />
              <label>Telefone:</label>
              <input
                type="text"
                value={contactUpdate.phone}
                onChange={(e) =>
                  setContactUpdate({
                    ...contactUpdate,
                    phone: e.target.value,
                  })
                }
              />
              <br />
              <ButtonComponent status="primary" type="submit">
                Editar Contato
              </ButtonComponent>
            </Form>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};
