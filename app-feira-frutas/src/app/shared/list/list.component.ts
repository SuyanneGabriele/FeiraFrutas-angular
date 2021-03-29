import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() entityObject: any[];
  @Output() listaCarrinho: any[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.entityObject)
  }

  addCarrinho(fruit) {
    this.listaCarrinho.push(fruit)
  }

}
