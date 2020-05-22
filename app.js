const http = require('http');
const colors = require('colors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorsController = require('./controllers/errors');
// const expressHbs = require('express-handlebars');
// const {rootDir} = require('./util/helpers');

const port = 3030;
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views/ejs');


// default views will be /view that doesnt need to be mentioned
// app.engine(
//   'hbs',
//   expressHbs({
//     defaultLayout: 'main-layout',
//     extname: 'hbs',
//   })
// );
// app.set('view engine', 'hbs');
// app.set('views', 'views/handlebars');

// app.set('view engine', 'pug');
// app.set('views', 'views/pug');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use('/admin', adminRoutes);

app.use(errorsController.get404);

//We can start and create server with this line alone
// app.listen(port, () => console.log(colors.green('Hola::************starting server**************', port)));

const server = http.createServer(app);

server.listen(port, () => console.log(colors.green('Hola::************starting server**************', port)));

const shutdown = function() {
  console.log(colors.yellow('WARN::************shutting down server**************'));
  server.close();
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);