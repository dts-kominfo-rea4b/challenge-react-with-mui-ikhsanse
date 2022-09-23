import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = ({addContactOnHandler}) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhoto, setEnteredPhoto] = useState("");
  const [newContact, setNewContact] = useState([]);
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const phoneHandler = (e) => {
    setEnteredPhone(e.target.value);
  };

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const photoHandler = (e) => {
    setEnteredPhoto(e.target.value);
  };

  const addContactHandler = () => {
    const contact = {
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      photo: enteredPhoto,
    };
    setNewContact(contact);
    addContactOnHandler(contact);

    setEnteredEmail("");
    setEnteredName("");
    setEnteredPhone("");
    setEnteredPhoto("");
  };

  return (
    <>
      {/* <form> */}
      <Card sx={{ backgroundColor: "#f3f1eb" }}>
        <CardContent>
          <TextField
            fullWidth
            id="name-field"
            label="Name *"
            variant="filled"
            margin="dense"
            value={enteredName}
            onChange={nameHandler}
          />
          <TextField
            fullWidth
            type="number"
            id="phone-field"
            label="Phone *"
            variant="filled"
            margin="dense"
            value={enteredPhone}
            onChange={phoneHandler}
          />
          <TextField
            fullWidth
            type="email"
            id="email-field"
            label="Email *"
            variant="filled"
            margin="dense"
            value={enteredEmail}
            onChange={emailHandler}
          />
          <TextField
            fullWidth
            id="photo-field"
            label="Photo URL *"
            variant="filled"
            margin="dense"
            value={enteredPhoto}
            onChange={photoHandler}
          />
        </CardContent>
        <CardActions>
          <Button onClick={addContactHandler} color="success" variant="text">
            Add New
          </Button>
        </CardActions>
      </Card>
      {/* </form> */}
    </>
  );
};

export default ContactForm;
