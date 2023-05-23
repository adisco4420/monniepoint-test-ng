import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sideMenuItems = [
    {icon: 'fab fa-airbnb', label: 'All Homes'},
    {icon: 'fab fa-airbnb', label: 'All Homes'},
    {icon: 'fab fa-airbnb', label: 'All Homes'},
    {icon: 'fab fa-airbnb', label: 'All Homes'},
    {icon: 'fab fa-airbnb', label: 'All Homes'},
  ]
  constructor() { }

  ngOnInit(): void {}

}
