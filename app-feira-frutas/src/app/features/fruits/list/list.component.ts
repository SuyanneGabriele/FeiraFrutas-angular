import { query } from '@angular/animations';
import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  listaCarrinho = [];

  fruits = [
    {
      id: 1,
      qtd: '',
      name: 'Laranja',
      price: 3,
    },
    {
      id: 2,
      qtd: '',
      name: 'Kiwi',
      price: 10
    },
    {
      id: 3,
      qtd: '',
      name: 'Melancia',
      price: 1
    },
    {
      id: 4,
      qtd: '',
      name: 'Melão',
      price: 5
    },
    {
      id: 5,
      qtd: '',
      name: 'Uva',
      price: 6
    },
    {
      id: 6,
      qtd: '',
      name: 'Maçã',
      price: 3
    },
    {
      id: 7,
      qtd: '',
      name: 'Tangerina',
      price: 4
    },
    {
      id: 8,
      qtd: '',
      name: 'Mamão',
      price: 3
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
 total = 0;
  addCarrinho(fruit) {
    this.listaCarrinho.push(fruit);
  }
  removerItem(listaCarrinho ,id) {

    var result = listaCarrinho.filter(function(el) {
      return el.id == id;
    });

    for(var elemento of result){
      var index = listaCarrinho.indexOf(elemento);
      listaCarrinho.splice(index, 1);
    }
  }

  Comprar(){
    alert('Comprado com sucesso')
    location.reload(true);
  }

}
