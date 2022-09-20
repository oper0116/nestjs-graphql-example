import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';

@Module({
  imports: [HttpModule],
  providers: [AuthorResolver, AuthorService],
})
export class AuthorModule {}
