import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => ({
  uri: getMongoString(configService),
  ...getMongoOptions(),
});

const getMongoString = (configService: ConfigService) =>
  'mongodb+srv://' +
  configService.get('MONGO_LOGIN') +
  ':' +
  configService.get('MONGO_PASSWORD') +
  '@' +
  configService.get('MONGO_HOST') +
  '/' +
  configService.get('MONGO_DB');

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
