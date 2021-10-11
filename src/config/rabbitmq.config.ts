import { ConfigService } from '@nestjs/config';

export const getRabbitMQString = (configService: ConfigService) =>
  'amqp://' +
  configService.get('RABBITMQ_DEFAULT_USER') +
  ':' +
  configService.get('RABBITMQ_DEFAULT_PASS') +
  '@' +
  configService.get('RABBITMQ_HOST') +
  ':' +
  configService.get('RABBITMQ_PORT');
