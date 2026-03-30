const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// Homepage with form
app.get('/', (req, res) => {
  res.send(`
    <h2>Simple Calculator 🧮</h2>
    <form action="/calculate" method="post">
      <input type="number" name="num1" placeholder="Enter first number" required />
      <input type="number" name="num2" placeholder="Enter second number" required />
      <button type="submit">Add</button>
    </form>
  `);
});

// Handle calculation
app.post('/calculate', (req, res) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  const result = n1 + n2;

  res.send(`<h2>Result: ${result}</h2>`);
});

app.listen(process.env.PORT || 3000);