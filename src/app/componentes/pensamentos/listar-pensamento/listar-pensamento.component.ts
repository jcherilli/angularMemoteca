import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento2 = [
    {conteudo: 'angular 1',
    autoria: 'dev1',
    modelo: 'modelo1'},
    {conteudo: 'angular 210',
    autoria: 'dev2',
    modelo: 'modelo2'}
  ];

  listaPensamento: Pensamento[] = [];

  constructor(
    private service: PensamentoService
  ) { }

  ngOnInit(): void {
    this.service.listar().subscribe(
    t => {
      this.listaPensamento = t;
    }
    );
  }

}
