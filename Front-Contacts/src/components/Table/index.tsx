import { Table, Tbody, Thead } from "./style";
import moment from "moment";
import { Contact } from "../../types/Contacts";
import { ButtonComponent } from "../Button";
import { useState } from "react";
import { Modal } from "../Modal";

type TableProps = {
  contacts: Contact[];
  deleteContact: (id: number) => void;
  fetchContacts: () => void;
};

export function TableComponent({
  contacts,
  deleteContact,
  fetchContacts,
}: TableProps) {
  const [showModal, setShowModal] = useState(false);
  const [contactUpdate, setContactUpdate] = useState<Contact>(contacts[0]);

  return (
    <>
      {showModal && contactUpdate && (
        <Modal
          show={showModal}
          contact={contactUpdate}
          fetchContacts={fetchContacts}
        />
      )}
      <Table>
        <Thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Criado em</th>
            <th>Ações</th>
          </tr>
        </Thead>
        <Tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{moment(contact.creation).format("DD/MM/YYYY HH:mm:ss")}</td>
              <td>
                <ButtonComponent
                  status="secondary"
                  onClick={() => {
                    setShowModal(true);
                    setContactUpdate(contact);
                  }}
                  type="button"
                >
                  Editar
                </ButtonComponent>
                <ButtonComponent
                  status="danger"
                  onClick={() => deleteContact(contact.id)}
                  type="button"
                >
                  Excluir
                </ButtonComponent>
              </td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}
