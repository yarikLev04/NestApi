import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { MixedList } from 'typeorm/common/MixedList';
import { EntitySchema } from 'typeorm/entity-schema/EntitySchema';

// eslint-disable-next-line @typescript-eslint/ban-types
type Entity = Function | string | EntitySchema;

export const getPostgresSqlConfig = async (
  configService: ConfigService,
  entities: MixedList<Entity>,
): Promise<TypeOrmModuleOptions> => ({
  type: 'postgres',
  host: configService?.get<string>('POSTGRES_HOST'),
  port: configService?.get<number>('POSTGRES_PORT'),
  username: configService?.get<string>('POSTGRES_USER'),
  password: configService?.get<string>('POSTGRES_PASSWORD'),
  database: configService?.get<string>('POSTGRES_DATABASE'),
  entities,
  synchronize: true,
  logging: true,
});
