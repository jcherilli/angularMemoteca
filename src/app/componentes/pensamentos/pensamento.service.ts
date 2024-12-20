import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly api = 'http://localhost:3000/pensamentos';

  constructor(
    private httpClient: HttpClient
  ) { }

  public listar(): Observable<Pensamento[]> {
    return this.httpClient.get<Pensamento[]>(this.api);
  }

  criar(pensamento: Pensamento) {
    return this.httpClient.post(this.api, pensamento);
  }
}
