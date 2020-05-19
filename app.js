const http = require('http');
const colors = require('colors');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const { rootDir } = require('./utils/helpers');

const port = 3030;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use('/admin', adminRoutes);

app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

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