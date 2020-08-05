const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

// App Set //
const PORT = process.env.PORT || 5000;
const app = express();

//
// EXPRESS APPLICATION MIDDLEWARE
// ------------------------------------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// add middleware for cookie session
app.use(cookieSession({
  name: 'session',
  keys: [/* secret */ 'w@nd3rFul'],
  maxAge: 2 * 60 * 1000, // in milliseconds
}));

//
// API ROUTES
// ------------------------------------------------------------

// GET
app.get('/api/creature', (req, res) => {
  // bodyParser => req.body
  const creature = req.session.favoriteCreature;
  console.log('GET', creature);
  res.send({ favoriteCreature: creature });
});

// POST
app.post('/api/creature', (req, res) => {
  const favCreature = req.body;
  console.log('POST', favCreature);

  // document.cookie = 'value' <=> req.session.kittyKat = value
  // {
  //   id: 2,
  //   username: 'tim',
  // }
  req.session.user = { id: 2, username: 'tim' };
  req.session.favoriteCreature = favCreature.creature;
  res.sendStatus(201);
});

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
