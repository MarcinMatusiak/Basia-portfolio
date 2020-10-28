const express = require('express');
const nodemailer = require('nodemailer');

const contact = require('../../src/data/contact');
const auth = require('../config/config');

const router = express.Router();

// get content route for Contact component
router.get('/', (req, res) => {
  res.send(contact);
});

// send email
const transport = {
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: auth.USER,
    pass: auth.PASS
  }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const topic = req.body.topic;
  const message = req.body.message;
  const checkbox = req.body.checkbox === true ? 'tak' : 'nie';
  const content = `Imię i nazwisko: ${name}\
    \nAdres email: ${email}\
    \nNr telefonu: ${phone}\
    \nZgoda na przetwarzanie danych: ${checkbox}\
    \nTreść wiadomości:\n${message}\
    `;

  const mail = {
    from: `${name}`,
    to: `${auth.USER}`,
    subject: topic,
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      });
    } else {
      res.json({
        status: 'success'
      });
    }
  });
});

module.exports = router;
