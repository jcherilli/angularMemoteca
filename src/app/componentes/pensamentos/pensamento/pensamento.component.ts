import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: any;

  constructor() { }

  ngOnInit(): void {
  }

  public larguraCard(): string {
    if (this.pensamento.conteudo.length > 10) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

}
