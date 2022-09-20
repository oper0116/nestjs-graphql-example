import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
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

  constructor(private readonly httpService: HttpService) {}

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
    const response = this.httpService.get('http://localhost:3000/cats');
    console.log(JSON.stringify(response));
    return this.dummy;
  }

  // async axiosTest(): Observable<AxiosResponse<Author[]>> {
  //   return this.httpService.get('http://localhost:3000/cats');
  // }

  // async axiosTest(): AxiosResponse<Author[]> {
  //   return this.httpService.get('http://localhost:3000/cats');
  // }
}
