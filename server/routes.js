const path = require('path');
const express = require('express');

module.exports = (app) => {
  app.get('/', (req, res) => {
    app.use('/', express.static(path.join(__dirname, '../public')));
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  const getTime = (req, res) => {
    console.log(`GET ${req.originalUrl}`);

    let timeString = new Date().toISOString();
    let ret = { timeString };
    console.log(ret);

    return res.send(ret);
  }

  app.get('/api/time', getTime);
};

