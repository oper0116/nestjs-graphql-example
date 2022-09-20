import { Injectable } from '@nestjs/common';
import { Author } from './models/author.model';

@Injectable()
export class AuthorService {
  private dummy = [
    {
      id: 'oper0116',
      firstName: 'han',
      lastName: 'donghee',
    },
    {
      id: 'oper0111',
      firstName: 'han',
      lastName: 'donghee',
    },
    {
      id: 'oper0112',
      firstName: 'han',
      lastName: 'donghee',
    },
    {
      id: 'oper0113',
      firstName: 'han',
      lastName: 'donghee',
    },
    {
      id: 'oper0114',
      firstName: 'han',
      lastName: 'donghee',
    },
  ] as Author[];

  async create(data: Author) {
    console.log(`AuthService create ${data}`);

    this.dummy.push(data);
    return this.dummy;
  }

  async findOneById(id: string): Promise<Author> {
    console.log('id: ', id);
    return this.dummy.find((item) => item.id === id);
  }

  async findAll(): Promise<Author[]> {
    return this.dummy;
  }
}
