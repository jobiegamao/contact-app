import React, {useState, useEffect} from "react";
import { v4 as uuid } from 'uuid'; //npm i uuidv4 -> for unique IDs
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"; // npm i react-router-dom --save
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";

function App() {
  return (
    <div className="ui container">
          {/* to add component files */}
          {/* add closing only to add component if no other deets to add in the mid */}
        <Router>
          <Header /> 
          <ContactsCrudContextProvider>
            <Routes>
              <Route
                path="/"
                exact
                element={<ContactList/>}
              />
              <Route
                path="/add"
                element={<AddContact />}
              />

              <Route
                path="/edit"
                element = {<EditContact />}
              />

              <Route path="/contact/:id" element={<ContactDetail/>} />
              
            </Routes>
          </ContactsCrudContextProvider>
        </Router>
    </div>
  );
}

export default App;
