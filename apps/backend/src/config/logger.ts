import pino from 'pino';

const isDevelopment = process.env.NODE_ENV === 'development';

const transport = isDevelopment
  ? {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
        ignore: 'pid,hostname',
        singleLine: false,
      },
    }
  : undefined;

export const logger = pino(
  {
    level: process.env.LOG_LEVEL || 'info',
    ...(isDevelopment && { transport }),
  },
  isDevelopment ? pino.transport({ target: 'pino-pretty' }) : undefined
);

export default logger;
