import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthorService } from './author/author.service';
import { AuthorResolver } from './author/author.resolver';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      // debug: false,
      // playground: false,
    }),
    AuthorModule,
  ],
  providers: [AuthorResolver, AuthorService],
})
export class AppModule {}
