import { useState } from "react"
import { Form, FormContainer, FormButton } from "./ContactComponents"
import MainButton from "../buttons/MainButton"

export default function ContactForm() {

    const [status, setStatus] = useState('Submit')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('Sending...')
        const { name, email, message } = e.target.elements
        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        }
        let response = await fetch("https://91.238.165.240/tomsclas/thomaspchant/projects/test:3000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        })
        setStatus('Submit')
        let result = await response.json()
        alert(result.status)
    }

    return (
        <FormContainer>
            <h2>Let's start a conversation</h2>
            <Form onSubmit={handleSubmit}>
                <div><label htmlFor="name">Name:</label></div>
                <input type="text" id="name" required />
                <div><label htmlFor="email">Email:</label></div>
                <input type="email" id="email" required />
                <div><label htmlFor="message">Your Project Details:</label></div>
                <textarea id="message" required />
                <FormButton type="submit">{status}</FormButton>
            </Form>
        </FormContainer>

    )
}


