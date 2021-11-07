import emailjs from 'emailjs-com'
import { useState, useRef } from "react"
import { Form, FormContainer, FormButton } from "./ContactComponents"
import { details } from '../../secrets'

export default function ContactForm() {

    const [status, setStatus] = useState('Submit')

    const form = useRef();

    const {one, two, three} = details

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     setStatus('Sending...')
    //     const { name, email, message } = e.target.elements
    //     let details = {
    //         name: name.value,
    //         email: email.value,
    //         message: message.value
    //     }
    //     let response = await fetch("https://91.238.165.240/tomsclas/thomaspchant/projects/test:3000", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json;charset=utf-8",
    //         },
    //         body: JSON.stringify(details),
    //     })
    //     setStatus('Submit')
    //     let result = await response.json()
    //     alert(result.status)
    // }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('Sending...')
            emailjs.sendForm(one, two, form.current, three )
      .then((result) => {
          console.log(result.text);
          setStatus('Thank You!')
      }, (error) => {
          console.log(error.text);
      });

    }

    return (
        <FormContainer>
            <h2>Let's start a conversation</h2>
            <Form onSubmit={handleSubmit} ref={form}>
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


