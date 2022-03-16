/* eslint-disable sort-imports */
import config from 'config';
import context from './middleware/context';
import express from 'express';
import fs from 'fs';
import gracefulShutdown from '@nc/utils/graceful-shutdown';
import helmet from 'helmet';
import Logger from '@nc/utils/logging';
import security from './middleware/security';
import { router as userRoutes } from '@nc/domain-user';
import https from 'https';

const logger = Logger('server');
const app = express();

const options = {
  key: fs.readFileSync('./certs/test-key.key'),
  cert: fs.readFileSync('./certs/test-cert.pem'),
};

const server = https.createServer(options, app);

gracefulShutdown(server);

app.use(express.json());
app.use(helmet());

app.get('/ok', (req, res) => {
  res.status(200).send('Ok');
});

app.get('/readycheck', function readinessEndpoint(req, res) {
  // const status = (server.ready) ? 200 : 503;
  const status = 200;
  res.status(status).send(status === 200 ? 'OK' : 'NOT OK');
});

app.get('/ok', (req, res) => {
  res.status(200).send('ok');
});

app.get('/healthcheck', function healthcheckEndpoint(req, res) {
  res.status(200).send('OK');
});

app.use(context);
app.use(security);

app.use('/user', userRoutes);

app.use(function(err, req, res, next) {
  res.status(500).json(err);
});

server.listen(config.port, () => {
  // server.ready = true;
  logger.log(`Server started on port ${config.port}`);
});
// const server = app.listen(config.port, () => logger.log(`Starting at localhost:${config.port}`));
export default server;
