import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvarPensamento() {
    alert("salvando pensamento");
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento']);
  }

}
