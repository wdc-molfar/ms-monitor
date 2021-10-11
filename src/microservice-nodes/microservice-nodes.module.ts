import { Module, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxyFactory,
  RmqOptions,
  Transport,
} from '@nestjs/microservices';
import { getRabbitMQString } from '../config/rabbitmq.config';

const MicroserviceNodesProvider: Provider = {
  provide: 'MICROSERVICE_NODES',
  useFactory: (configService: ConfigService) => {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [getRabbitMQString(configService)],
        queue: configService.get('RABBITMQ_QUEUE_NAME'),
        queueOptions: {
          durable: true,
        },
      },
    } as RmqOptions);
  },
  inject: [ConfigService],
};

@Module({
  imports: [],
  controllers: [],
  providers: [MicroserviceNodesProvider],
})
export class MicroserviceNodesModule {}
