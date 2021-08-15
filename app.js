const express = require('express');
const bp = require('body-parser');
const models = require('./models');

const PORT_NUMBER = 3000;
const API = '/api'

const app = express();

let users = []

app.use(express.json());
app.use(bp.json());

app.get('/', (req, res) => {
  return res.status(200).send('Hello world.');
});

app.get(`/supervisors`, (req, res) => {
  return res.status(200).send(JSON.stringify(models.supervisors));
});

app.post(`/register`, (req, res) => {
  users.push({
    name: req.body.name,
    notificationsEnabled: req.body.notificationsEnabled,
    supervisor: req.body.supervisor
  });
  return res.status(200).send('User successfully created');
});

app.get(`/notification/:id`, (req, res) => {
  notification = models.notification[`${req.params.id}`]
  res.status(200).send(JSON.stringify(notification));
});

app.listen(PORT_NUMBER, () => {
  console.log(`I'm listening at port ${PORT_NUMBER}...`);
});
