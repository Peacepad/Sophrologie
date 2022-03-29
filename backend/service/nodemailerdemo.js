const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "hypnose-web@outlook.com",
      pass: "Peacedu07"
    }
  })
  
  const options = {
    from:"hypnose-web@outlook.com",
    to: "padelamare@gmail.com",
    subject: "test de mail",
    text: "test de mail pour envoyer des mots de passe oublié par la suite."
  };
  
  transporter.sendMail(options, function (err, info) {
    if(err) {
      console.log(err);
      return;
    }
    console.log("Sent " + info.response)
  })