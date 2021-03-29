import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  fruits = [
    {
      id: 1,
      name: 'Laranja',
      price: 3,
    },
    {
      id: 2,
      name: 'Laranja',
      price: 2
    },
    {
      id: 3,
      name: 'Laranja',
      price: 2
    },
    {
      id: 4,
      name: 'Laranja',
      price: 2
    },
    {
      id: 5,
      name: 'Laranja',
      price: 2
    },
    {
      id: 6,
      name: 'Laranja',
      price: 2
    },
    {
      id: 7,
      name: 'Laranja',
      price: 2
    },
    {
      id: 8,
      name: 'Laranja',
      price: 2
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
