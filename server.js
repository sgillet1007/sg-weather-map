const express = require('express');

const app = express();

app.use(express.json());

// Route definition - only one route for now
app.use('/api/v1/weatherdata', require('./routes/weatherdata'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Weather Map Server started on port ${PORT}`)
);
