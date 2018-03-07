const app = require('./app.js');

let port = process.env.PORT || 3001;
app.listen(port, () => console.log('Express listening on port ', port));
