import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { Author } from './models/author.model';

@Resolver()
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query((returns) => Author)
  async author(@Args('id') id: string): Promise<Author> {
    const author = await this.authorService.findOneById(id);
    if (!author) {
      return { id: '111' };
      // throw new NotFoundException(id);
    }
    return author;
  }

  @Query((returns) => [Author])
  async authors(): Promise<Author[]> {
    return this.authorService.findAll();
  }
}
