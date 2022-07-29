import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import nunjucks from 'nunjucks';
import mongoose from 'mongoose';
import indexRoute from './routes/index.route.js';
import createRoute from './routes/create.route.js';
import deleteRoute from './routes/delete.route.js';
import editRoute from './routes/edit.route.js';
import viewRoute from './routes/view.route.js';

const __filename = fileURLToPath(import.meta.url) ;
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set('views', path.resolve(__dirname, 'views'));
nunjucks.configure('views', {
  express: app,
  noCache: true
});
app.set('view engine', 'njk');

app.use(express.static(path.resolve(__dirname, 'static')));

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoute);
app.use('/create', createRoute);
app.use('/delete', deleteRoute);
app.use('/edit', editRoute);
app.use('/view', viewRoute);

// 404
// app.use('**', (req, res) => {
//   res.status(404).render('error404.njk');
// });

// app.use(function(req, res, next) {
//   next('eeeeeeee next');
// });

// // error handler
// app.use(function(err, req, res, next) {
//   console.error('eeeeeeeeeeeerrrror', err.stack);
//   res.status(500).send('Something broke!');
// });


// // catch 404 and forward to error handler
app.use(function(req, res, next) {
  let error = new Error('Not found');

  next(error);
});

// // error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // err.status - нет, его добавляет пакет http-errors (кт не используется сейчас для генерации ошибок)
  // можно добавить его вручную
  // e.status = 404;

  res.render('error.njk', { error: err });
});


const main = async () => {
  await mongoose.connect('mongodb://localhost:27017/news-site')

  app.listen(port, () => {
    console.log(`Server is running, listening at http://localhost:${port}`);
  });
};

main();
