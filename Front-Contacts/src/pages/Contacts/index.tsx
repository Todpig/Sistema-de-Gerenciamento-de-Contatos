import { Container, Form } from "./style";
import { apiBase } from "../../utils/baseUrl";
import { useEffect, useState } from "react";
import { Contact } from "../../types/Contacts";
import { TableComponent } from "../../components/Table";
import { ButtonComponent } from "../../components/Button";

export function Contacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [newContact, setNewContact] = useState<Contact>({
    name: "",
    email: "",
    phone: "",
    id: 0,
    creation: "",
  });

  useEffect(() => {
    fetchContacts();
  }, []);

  function fetchContacts() {
    apiBase.get("/contact/").then((res) => {
      setContacts(res.data);
      console.log(res);
    });
  }

  function createContact() {
    apiBase
      .post("/contact/", newContact)
      .then(() => {
        fetchContacts();
        setContacts((prev) => [...prev, newContact]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteContact(id: number) {
    if (confirm("Tem certeza que deseja excluir este contato?")) {
      apiBase.delete(`/contacts/${id}`).then(() => {
        fetchContacts();
      });
    }
  }
  return (
    <Container>
      <h1>Contatos</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          createContact();
        }}
      >
        <label>Nome:</label>
        <input
          type="text"
          value={newContact.name}
          onChange={(e) =>
            setNewContact({ ...newContact, name: e.target.value })
          }
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          value={newContact.email}
          onChange={(e) =>
            setNewContact({ ...newContact, email: e.target.value })
          }
        />
        <br />
        <label>Telefone:</label>
        <input
          type="text"
          value={newContact.phone}
          onChange={(e) =>
            setNewContact({ ...newContact, phone: e.target.value })
          }
        />
        <br />
        <ButtonComponent status="primary" type="submit">
          Criar
        </ButtonComponent>
      </Form>

      <TableComponent contacts={contacts} deleteContact={deleteContact} />
    </Container>
  );
}
