import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);

  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const addContactHandler = (newContact) => {
    setContacts([...contacts, newContact])
  }
  console.log(contacts)

  return (
    <div className="App">
      <Header/>
      <Container sx={{marginTop:'1rem'}}>
        <Grid container justifyContent="space-between" spacing={2}>
          <Grid item md={6}>
            <ContactForm addContactOnHandler={addContactHandler}/>
          </Grid>
          <Grid item md={6}>
            <Contact data={contacts}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
