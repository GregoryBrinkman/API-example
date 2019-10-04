const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

require('./server/routes')(app);

app.listen(port, () =>
  console.log(`Server listening on port ${port}\nCtrl+C to close`)
);


