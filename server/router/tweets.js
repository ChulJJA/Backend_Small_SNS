import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';

const router = express.Router();
const validateTwwet = [
  body('text')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Text should be at least 3 letters.'),
  validate,
];

router.get('/', tweetController.getTweets);

router.get('/:id', tweetController.getTweet);

router.post('/', validateTwwet, tweetController.createTweet);

router.put('/:id', validateTwwet, tweetController.updateTweet);

router.delete('/:id', tweetController.deleteTweet);

export default router;
