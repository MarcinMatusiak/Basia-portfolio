const express = require('express');
const cors = require('cors');
const path = require('path');

const contact = require('./routes/contact');
const portfolio = require('./routes/portfolio');

const router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(express.static('src'));
app.use('/api/contact', contact);
app.use('/api/portfolio', portfolio);

const PORT = 3000;

router.get('/', (req, res) => {
  res.send({ message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores molestiae impedit illo eligendi voluptas laboriosam, cupiditate accusamus? Doloribus quidem tempora atque maiores voluptatem quasi magnam cumque iste similique, asperiores placeat. Inventore itaque, nobis atque minus tenetur neque amet ipsam veniam repellendus veritatis dolore, obcaecati id porro eum consectetur aliquam quisquam cum esse sequi quo. Mollitia eius officiis quos reprehenderit repudiandae enim dolores optio delectus? Eveniet quisquam, voluptate libero cupiditate ipsam rerum facilis! Consectetur, impedit, hic fugit dolor necessitatibus deserunt ex veniam quas libero nemo voluptas unde. Numquam obcaecati asperiores voluptatem aspernatur ipsa velit quas, expedita fugit optio quis corrupti laborum.' });
});

app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
