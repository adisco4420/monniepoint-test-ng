import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sideMenuItems = [
    {icon: 'fab fa-airbnb', label: 'All Homes'},
    {icon: 'fas fa-igloo', label: 'Amazing Views'},
    {icon: 'fas fa-laptop-house', label: 'Tiny homes'},
    {icon: 'fas fa-sink', label: 'Chefs Kitchen'},
    {icon: 'fas fa-skating', label: 'Surfing'},
  ]
  constructor() { }

  ngOnInit(): void {}

  onMouseEnterSidemenu() {
    const sidemenuEl = document.getElementById('sidemenu');
    const mainContainerEl = document.getElementById('main-container');
    sidemenuEl?.classList.remove('col-md-1');
    sidemenuEl?.classList.add('col-md-2');
    mainContainerEl?.classList.remove('col-md-11')
    mainContainerEl?.classList.add('col-md-10')
  }
  onMouseLeaveSidemenu(){
    const sidemenuEl = document.getElementById('sidemenu');
    const mainContainerEl = document.getElementById('main-container');
    sidemenuEl?.classList.add('col-md-1');
    sidemenuEl?.classList.remove('col-md-2');
    mainContainerEl?.classList.add('col-md-11')
    mainContainerEl?.classList.remove('col-md-10')
  }

}
