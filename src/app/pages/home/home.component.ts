import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  basicData: any;
  basicOptions: any;

  imagemPlaceholder: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png';

  lore: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua';

  informacao = [
    {
      info: 'Informação 01',
      imagem: this.imagemPlaceholder,
      texto: this.lore,
    },
    {
      info: 'Informação 02',
      imagem: this.imagemPlaceholder,
      texto: this.lore,
    },
    {
      info: 'Informação 03',
      imagem: this.imagemPlaceholder,
      texto: this.lore,
    },
  ];



  constructor() {}

  ngOnInit(): void {

    this.basicData = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
      datasets: [
          {
              label: 'Informação',
              backgroundColor: '#42A5F5',
              data: [65, 59, 80, 81, 56, 55, 40]
          }
      ]
  };
  
  this.basicOptions = {
      plugins: {
          legend: {
              labels: {
                  color: 'black'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: 'black'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          },
          y: {
              ticks: {
                  color: 'black'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          }
      }
  };

  }
}
