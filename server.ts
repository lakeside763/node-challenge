import config from 'config';
import context from './middleware/context';
import express from 'express';
import fs from 'fs';
import gracefulShutdown from '@nc/utils/graceful-shutdown';
import helmet from 'helmet';
import Logger from '@nc/utils/logging';
import security from './middleware/security';
import { router as userRoutes } from '@nc/domain-user';
import { router as expenseRoutes } from '@nc/domain-expense';
import https from 'https';
import { errorHandler } from './middleware/error-handler';

export const logger = Logger('server');
export const app = express();
export const port = config.port;

const options = {
  key: fs.readFileSync('./certs/test-key.key'),
  cert: fs.readFileSync('./certs/test-cert.pem'),
};

export const server = https.createServer(options, app);

gracefulShutdown(server);

app.use(express.json());
app.use(helmet());

app.get('/ok', (req, res) => {
  res.status(200).send('Ok');
});

app.get('/readycheck', function readinessEndpoint(req, res) {
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
app.use('/expense', expenseRoutes);
app.use(errorHandler);
