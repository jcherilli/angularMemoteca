import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'angular 1',
    autoria: 'dev1',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  salvarPensamento() {
    alert("salvando pensamento");
  }

  cancelarPensamento() {
    alert("cancelando pensamento");
  }

}
