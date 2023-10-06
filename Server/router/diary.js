const { Router } = require('express');
const countryController = require('../controllers/diary');

const diaryRouter = Router();

countryRouter.get('/', diary.index);
countryRouter.get('/:name', diary.show);
countryRouter.post('/', diary.create);
countryRouter.patch('/:name', diary.update);
countryRouter.delete('/:name', diary.destroy);

module.exports = diaryRouter;