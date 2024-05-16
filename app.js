const express = require('express');
const app = express();
// const port = 8050;
const port = process.env.PORT || 8050

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
