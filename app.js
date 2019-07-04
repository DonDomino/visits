const express = require("express");
const app = express();
const cookieSession = require('cookie-session');
let totalVisits = 0;

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(cookieSession({
  secret: 'barranquilla inmortal',
  maxAge: 1 * 60 * 1000
}))

app.get("/", (req, res) => { 
  req.session.views = (req.session.views || 0) + 1; 
  totalVisits += 1;
  res.render("index", { totalVisits, totalSession: req.session.views});  
});

app.listen(3000, () => console.log('Listening on port 3000!'));