import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Heading from "./components/Heading";
import Studentlist from "./components/Studentlist";

function App() {
  const [studentList, setStudentList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    let name = event.target[0].value;
    let email = event.target[1].value;
    console.log(email);
    let newStudentList = [...studentList, { name: name, email: email }];
    setStudentList(newStudentList);
  };

  return (
    <>
      <Form
        nameValue={name}
        emailValue={email}
        handleOnChangeEmail={handleOnChangeEmail}
        handleOnChangeName={handleOnChangeName}
        handleOnSubmit={handleSubmit}
      />
      <Heading />
      {studentList.map((items, i) => (
        <Studentlist
          key={i}
          studentName={items.name}
          studentEmail={items.email}
        />
      ))}
    </>
  );
}

export default App;
