const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const auth = require('./config/config');

const router = express.Router();

const App = express();
App.use(cors());
App.use(express.json());
App.use('/api', router);

const PORT = 3000;

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
  const message = req.body.message;
  const content = `name: ${name} \nemail: ${email} \nphone: ${phone} \nmessage: ${message}`;

  const mail = {
    from: email,
    to: `${auth.USER}`,
    subject: 'Wiadomość z formularza kontaktowego',
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

router.get('/', (req, res) => {
  res.send({ message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores molestiae impedit illo eligendi voluptas laboriosam, cupiditate accusamus? Doloribus quidem tempora atque maiores voluptatem quasi magnam cumque iste similique, asperiores placeat. Inventore itaque, nobis atque minus tenetur neque amet ipsam veniam repellendus veritatis dolore, obcaecati id porro eum consectetur aliquam quisquam cum esse sequi quo. Mollitia eius officiis quos reprehenderit repudiandae enim dolores optio delectus? Eveniet quisquam, voluptate libero cupiditate ipsam rerum facilis! Consectetur, impedit, hic fugit dolor necessitatibus deserunt ex veniam quas libero nemo voluptas unde. Numquam obcaecati asperiores voluptatem aspernatur ipsa velit quas, expedita fugit optio quis corrupti laborum.' });
});

App.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
