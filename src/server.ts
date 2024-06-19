// src/server.ts

import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 9876;

// FizzBuzz function
function fizzBuzz(from: number, to: number): string[] {
  const result: string[] = [];
  for (let i = from; i <= to; i++) {
    if (i % 3 === 0 && i % 7 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 7 === 0) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

// Express route
app.get('/fizzbuzz', (req: Request, res: Response) => {
  const from = parseInt(req.query.from as string);
  const to = parseInt(req.query.to as string);

  if (isNaN(from) || isNaN(to)) {
    return res.status(400).json({ error: 'Invalid parameters. Please provide valid "from" and "to" values.' });
  }

  const result = fizzBuzz(from, to);
  res.json({ result });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
