const express = require('express');
const path = require('path');

const categories = require('../../src/data/categories');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(categories);
});

router.get('/:categoryId/:resourceId/:imgId', (req, res) => {
  const resourceId = req.params.resourceId;
  const imgId = req.params.imgId;
  const rootPath = path.join(__dirname, '../../');
  res.sendFile(path.join(rootPath, `src/img/${resourceId}/${imgId}`));
});

module.exports = router;
