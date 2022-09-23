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

const ContactForm = ({ addContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  // handler untuk get value inputan
  const inputHandler = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value,
    });
  };
  // Passing newContact state to App.js(parent)
  const addContactHandler = () => {
    addContact(newContact);
  };
  return (
      <form>
        <Card sx={{ backgroundColor: "#f3f1eb" }}>
          <CardContent>
            <TextField
              fullWidth
              name="name"
              id="name-field"
              label="Name *"
              variant="filled"
              margin="dense"
              value={newContact.name}
              onChange={inputHandler}
            />
            <TextField
              fullWidth
              name="phone"
              id="phone-field"
              label="Phone *"
              variant="filled"
              margin="dense"
              value={newContact.phone}
              onChange={inputHandler}
            />
            <TextField
              fullWidth
              name="email"
              id="email-field"
              label="Email *"
              variant="filled"
              margin="dense"
              value={newContact.email}
              onChange={inputHandler}
            />
            <TextField
              fullWidth
              name="photo"
              id="photo-field"
              label="Photo URL *"
              variant="filled"
              margin="dense"
              value={newContact.photo}
              onChange={inputHandler}
            />
          </CardContent>
          <CardActions>
            <Button onClick={addContactHandler} color="success" variant="text">
              Add New
            </Button>
          </CardActions>
        </Card>
      </form>
  );
};

export default ContactForm;
