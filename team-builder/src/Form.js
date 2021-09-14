
// Imports
import React from 'react';

// Form
function Form(props){
    const {update, submit, formValues} = props;
    const whenChanged = (event) => {
        const {name, value} = event.target;
        update (name, value);
    };
    const whenSubmit = (event) => {
        event.preventDefault();
        submit();
    };

    // Returns
    return(
        <form className = 'form container' whenSubmit = {whenSubmit}>
            <div className = 'form=group inputs'>
                <label>
                    Name:
                    <input type = 'text' name = 'name' value = {formValues.username} placeholder = 'Create a username' maxLength = '12' whenChanged = {whenChanged} />
                </label>
                <label>
                    Email: 
                    <input type = 'email' name = 'email' value = {formValues.email} placeholder = 'Include your email' maxLength = '30' whenChanged = {whenChanged} />
                </label>
                <label>
                    Role: 
                    <select value = {formValues.role} name = 'role' whenChanged = {whenChanged}>
                        <option value = ''>What Is Your Role?</option>
                        <option value = 'Lead Frontend Engineer'>Lead Frontend Engineer</option>
                        <option value = 'Junior Frontend Engineer'>Junior Frontend Engineer</option>
                        <option value = 'Lead Backend Engineer'>Lead Backend Engineer</option>
                        <option value = 'Junior Backend Engineer'>Junior Backend Engineer</option>
                    </select>
                </label>
                <div className = 'submit'>
                    <button>sumbit</button>
                </div>
            </div>
        </form>
    );
}

// Exports
export default Form