import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamento = [
    {conteudo: 'angular 1',
    autoria: 'dev1',
    modelo: 'modelo1'},
    {conteudo: 'angular 210',
    autoria: 'dev2',
    modelo: 'modelo2'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
