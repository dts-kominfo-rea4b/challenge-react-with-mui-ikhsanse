// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <List sx={{ width: "100%", backgroundColor: "#dbf6f0" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ width: "80px", height: "80px", marginRight: "2rem" }}>
            <img src={data.photo} alt="" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography color="text.primary">{data.name}</Typography>
          <Typography color="text.secondary">{data.phone}</Typography>
          <Typography color="text.secondary">{data.email}</Typography>
        </ListItemText>
      </ListItem>
      <Divider />
    </List>
  );
};

export default Contact;
