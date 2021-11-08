const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const config = require("./secrets");

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3000, ()=> {
  console.log('server running')
})

const contactEmail = nodemailer.createTransport({
    host: "mail.thomaspchant.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: config.emailUsername,
      pass: config.emailPassword,
    },
  });
  
  contactEmail.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log(success);
      console.log("Ready to Send");
    }
  });

  router.post("/email", (req, res) => {
      console.log('happens')
      const name = req.body.name;
      const email = req.body.email;
      const message = req.body.message;
      const mail = {
          from: name,
          to: 'info@thomaspchant.com',
          subject: 'Contact Form Submission',
          html: `<p>Name: ${name}</p>
                 <p>Email: ${email}</p>
                 <p>Message: ${message}</p>`,
      }
      
      contactEmail.sendMail(mail, (error)=>{
          if(error){
              console.log('this is an error');
              res.json({status:"Error"})
            }
            else{
                res.json({status:"Message Sent"})
            }
        })
})

