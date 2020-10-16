const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 5000;

App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

App.get('/api', (req, res) => res.json({
  message: 'Seems to work!'
}));

App.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
