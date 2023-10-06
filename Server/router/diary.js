const { Router } = require('express');
const diaryController = require('../controllers/diary');

const diaryRouter = Router();

diaryRouter.get('/', diary.index);
diaryRouter.get('/:name', diary.show);
diaryRouter.post('/', diary.create);
diaryRouter.patch('/:name', diary.update);
diaryRouter.delete('/:name', diary.destroy);

module.exports = diaryRouter;
