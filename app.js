const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// Homepage
app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <style>
        body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Arial;
          background-color: #f5f5f5;
        }

        h1 {
          font-size: 60px;
          margin-bottom: 30px;
          text-align: center;
        }

        .calculator {
          text-align: center;
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }

        input {
          padding: 10px;
          margin: 10px;
          font-size: 16px;
        }

        button {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
        }
      </style>
    </head>

    <body>
      <h1>Hello, Kalaivani maam 👩‍🏫</h1>

      <div class="calculator">
        <h2>Simple Calculator 🧮</h2>
        <form action="/calculate" method="post">
          <input type="number" name="num1" placeholder="Enter first number" required />
          <input type="number" name="num2" placeholder="Enter second number" required />
          <br/>
          <button type="submit">Add</button>
        </form>
      </div>
    </body>
    </html>
  `);
});

// Calculation
app.post('/calculate', (req, res) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  const result = n1 + n2;

  res.send(`
    <h1 style="text-align:center;">Result: ${result}</h1>
    <div style="text-align:center;">
      <a href="/">Go Back</a>
    </div>
  `);
});

app.listen(process.env.PORT || 3000);