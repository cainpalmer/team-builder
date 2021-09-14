
// Imports
import Form from './Form';
import {useState} from 'react';
import './App.css';

// Global Variables
const teamMembers = [
  {name: 'Sidney Cole', role: 'Lead Frontend Engineer'},
  {name: 'Miles Morales', role: 'Junior Frontend Engineer'},
  {name: 'Kyle Sly', role: 'Junior Frontend Engineer'},
  {name: 'Matt Wilds', role: 'Lead Backend Engineer'},
  {name: 'Sam Sills', role: 'Junior Backend Engineer'},
  {name: 'Kaylie Zoe', role: 'Junior Backend Engineer'},
];
const inputFormValues = {
  name: '',
  email: '',
  role: '',
};

// App
function App() {
  const [members, setMembers] = useState(teamMembers);
  const [formValues, setFormValue] = useState(inputFormValues);

  const updateTeam = (inputName, inputValue) => {
    setFormValue({ ...formValues, [inputName]: inputValue});
  };

  const submitTeam = () => {
    const newApply = {
      name: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    };

    setMembers([...members, newApply]);
    setFormValue(teamMembers);
  }
  
  // Returns
  return (
    <div className="App">
      <h1>Join the Team!</h1>
      <Form formValues = {formValues} update = {updateTeam} submit = {submitTeam} />

      {members.map((member) => {
        return (
          <div>
            {member.name} is a {member.role}
          </div>
        )
      })}
    </div>
  )
}

// Exports
export default App;
