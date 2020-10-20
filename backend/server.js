const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 3000;

App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

App.get('/api', (req, res) => {
  res.send({ message: 'Seems to works' });
});

App.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
