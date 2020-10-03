import React, { useState } from "react";

function AddForm(props) {
    const {names, setNames} = props;
    const [person, setPerson] = useState({ name: ""})

    const handleChange = (event => {
        setPerson({ ...person, [event.target.name]: event.target.value });
    })   

    const handleSubmit = (event) => {
    event.preventDefault();
    setNames([...names, person]);
};

return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
            type="text"
            id="name"
            name="name"
            placeHolder="name"
            value={person.name}
            onChange={handleChange}
            />
        <label htmlFor="e-mail">E-mail</label>
        <input
            type="text"
            id="email"
            name="email"
            placeHolder="email"
            value={person.email}
            onChange={handleChange}
            />
            <label htmlFor="role">Role</label>
        <input
            type="text"
            id="role"
            name="role"
            placeHolder="role"
            value={person.role}
            onChange={handleChange}
            />
            <button> Add Teammate </button>
    </form>

)
};

export default AddForm;