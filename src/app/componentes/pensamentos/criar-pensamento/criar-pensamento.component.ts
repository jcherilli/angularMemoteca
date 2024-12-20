import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private router: Router,
    private service: PensamentoService
  ) { }

  ngOnInit(): void {
  }

  salvar() {
    this.service.criar(this.pensamento).subscribe();
    this.router.navigate(['/listarPensamento']);
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

}
