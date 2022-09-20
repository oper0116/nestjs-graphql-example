import { Module } from '@nestjs/common';
import { Context, GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthorService } from './author/author.service';
import { AuthorResolver } from './author/author.resolver';
import { AuthorModule } from './author/author.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      // debug: false,
      // playground: false,
      context: ({ req, res }) => ({ req, res }),
    }),
    AuthorModule,
  ],
  providers: [AuthorResolver, AuthorService],
})
export class AppModule {}
