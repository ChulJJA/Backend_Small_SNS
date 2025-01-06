import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();
const validateTwwet = [
  body('text')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Text should be at least 3 letters.'),
  validate,
];

router.get('/', isAuth, tweetController.getTweets);

router.get('/:id', isAuth, tweetController.getTweet);

router.post('/', isAuth, validateTwwet, tweetController.createTweet);

router.put('/:id', isAuth, validateTwwet, tweetController.updateTweet);

router.delete('/:id', isAuth, tweetController.deleteTweet);

export default router;
