import express from 'express';
import connectDatabase from './config/db';
import { check, validationResult } from 'express-validator';

const app = express();

// Connect database
connectDatabase();

// Middleware
app.use(express.json({ extended: false }));

// API Endpoints
/**
 * @route GET /
 * @desc Test endpoint
 */
app.get('/', (req, res) => res.send('http get request sent to root api endpoint'));

/**
 * @route POST api/food
 * @desc Create food
 */
app.post('/api/food',
  [
    check('description', 'Please enter a valid food description.').not().isEmpty(),
    check('servingSize', 'Please enter a number for the serving size.').isNumeric(),
    check('unit', 'Please enter a valid unit for the serving size such as cups or grams').not().isEmpty(),
    check('servingsPerContainer', 'Please enter the number of servings per container.').isNumeric()
  ],
   (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array()});
  } else {
    res.send(req.body);
  }
 
});

app.listen(3000, () => console.log('Express server running on port 3000'));