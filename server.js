import express from 'express';
import parser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import logger from 'morgan';
import webpackConfig from './webpack.config';
import route from './server/routes';
import swaggerSpec from './server/routes/swagger';

const port = process.env.PORT || 8080;

const app = express();

if (process.env.NODE_ENV !== ('production')) {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'client/src/')));
app.use(logger('dev'));

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  res.send(swaggerSpec);
});

app.use('/', route.userRouter);
app.use('/', route.rolesRouter);
app.use('/', route.documentRouter);
// app.get('/doc', (req, res) => {
//   res.status(200)
//   .sendFile(path.join(__dirname, 'server/swagger', 'index.html'));
// });

// app.use(express.static(path.join(__dirname, 'server/Swagger')));

app.all('*', (req, res) => {
  res.sendFile(`${__dirname}/client/src/index.html`);
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

module.exports = app;
