import { React, useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Button, Card, Badge, Accordion } from "react-bootstrap";

import axios from "axios";
const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure?")) {
    }
  };
  const [notes, setnotes] = useState([]);
  const fetchNotes = async () => {
    const { data } = await axios.get("api/notes");
    setnotes(data);
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <MainScreen title="Welcome back Ginni Nand">
      <Link to="createNote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Toggle as={Card.Text} Variant="link" eventKey="0">
                  {" "}
                  {note.title}
                </Accordion.Toggle>
              </span>

              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created On - date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
