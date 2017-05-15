// fetch dependencies
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';
import UserRoutes from './server/routes/UserRoutes';
import DocumentRoutes from './server//routes/DocumentRoutes';
import RoleRoutes from './server/routes/RoleRoutes';

dotenv.config();
const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

// use morgan for logging out requests to the console
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client/src/')));


// set up User related routes
UserRoutes.setUserRoutes(router);

// set up Document related routes
DocumentRoutes.setDocumentRoutes(router);

// set up Roles related routes
RoleRoutes.setRoleRoutes(router);

app.use(router);

app.all('*', (req, res) => {
  res.sendFile(`${__dirname}/client/src/index.html`);
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

export default app;






// import express from 'express';
// import bodyParser from 'body-parser';
// import webpack from 'webpack';
// import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import path from 'path';
// // import logger from 'morgan';
// import morgan from 'morgan';
// import webpackConfig from './webpack.config';
// import UserRoutes from './server/routes/UserRoutes';
// import DocumentRoutes from './server//routes/DocumentRoutes';
// import RoleRoutes from './server/routes/RoleRoutes';
// import swaggerSpec from './server/routes/swagger';

// const port = process.env.PORT || 8080;

// const app = express();
// const router = express.Router();

// if (process.env.NODE_ENV !== ('production')) {
//   const compiler = webpack(webpackConfig);
//   app.use(webpackDevMiddleware(compiler, {
//     hot: true,
//     noInfo: true,
//     publicPath: webpackConfig.output.publicPath
//   }));
//   app.use(webpackHotMiddleware(compiler));
// }

// app.use(morgan('tiny'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(express.static(path.join(__dirname, '../../public')));

// // app.use(express.static(path.join(__dirname, 'client/src/')));
// // app.use(logger('dev'));

// // app.use(parser.urlencoded({ extended: true }));
// // app.use(parser.json());

// app.get('/swagger.json', (req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
//   res.send(swaggerSpec);
// });

// // set up Roles related routes
// RoleRoutes.setRoleRoutes(router);
// // set up User related routes
// UserRoutes.setUserRoutes(router);
// // set up Document related routes
// DocumentRoutes.setDocumentRoutes(router);
// app.use(router);

// app.get('/doc', (req, res) => {
//   res.status(200)
//   .sendFile(path.join(__dirname, 'server/swagger', 'index.html'));
// });

// app.use(express.static(path.join(__dirname, 'server/Swagger')));


// app.all('*', (req, res) => {
//   res.sendFile(`${__dirname}/client/src/index.html`);
// });

// app.listen(port, () => {
//   console.log(`Server started on ${port}`);
// });

// module.exports = app;
