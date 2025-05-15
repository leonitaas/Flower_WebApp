const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from "public"
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Flower Shop app listening at http://localhost:${port}`);
});
