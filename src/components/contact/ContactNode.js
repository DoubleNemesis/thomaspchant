import { useState } from "react"
import { Form, FormContainer, FormButton } from "./ContactComponents"

export default function ContactFormNode() {

    const [status, setStatus] = useState('Submit')


    const handleSubmit = async (e) => {
        const url = "http://91.238.165.240/tomsclas/thomaspchant/projects/test:3000/email"
        //const url = "http://thomaspchant.com/projects/test:3000/app/email"
        e.preventDefault()
        setStatus('Sending...')
        const { name, email, message } = e.target.elements
        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        }
        let response = await fetch(url, {
            method: "POST",
            mode: "no-cors",
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
        <FormContainer id="contact-form">
            <h2>NodeJS Contact Form</h2>
            <Form onSubmit={handleSubmit}>
                <div><label htmlFor="name">Name:</label></div>
                <input type="text" id="name" name="user_name" required />
                <div><label htmlFor="email">Email:</label></div>
                <input type="email" id="email" name="user_email" required />
                <div><label htmlFor="message">Your Project Details:</label></div>
                <textarea id="message" name="message" required />
                <FormButton type="submit">{status}</FormButton>
            </Form>
            <p>I'll get back to you as soon as humanely possible, and usually within the hour.</p>
        </FormContainer>

    )
}


