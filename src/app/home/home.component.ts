import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailViewComponent } from '../detail-view/detail-view.component';
import { homeResources } from '../resources/homes';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('detailViewComp', {static: true}) detailViewComp: DetailViewComponent | undefined;
  @ViewChild('filterComp', {static: true}) filterComp: FilterComponent | undefined;
  imgBaseUrl = 'https://res.cloudinary.com/dx5bcp5ps/image/upload/v1685139853/monniepoint/';


  sideMenuItems = [
    {icon: 'fab fa-airbnb', label: 'All Homes'},
    {icon: 'fas fa-igloo', label: 'Amazing Views'},
    {icon: 'fas fa-laptop-house', label: 'Tiny homes'},
    {icon: 'fas fa-sink', label: 'Chefs Kitchen'},
    {icon: 'fas fa-skating', label: 'Surfing'},
    {icon: 'fas fa-warehouse', label: 'Mansions'},
    {icon: 'fas fa-mug-hot', label: 'Luxe'},
    {icon: 'fas fa-tree', label: 'Treehouses'},
    {icon: 'fas fa-mountain', label: 'Camping'},
    {icon: 'fas fa-umbrella-beach', label: 'Beachfront'},
    {icon: 'fas fa-cannabis', label: 'Farms'},
    {icon: 'fab fa-fort-awesome', label: 'Castles'},
    {icon: 'fas fa-swimmer', label: 'Islands'},
    {icon: 'fas fa-swimming-pool', label: 'Amazing Pools'},
    {icon: 'fab fa-vine', label: 'Vinegards'},
    {icon: 'fas fa-vihara', label: 'Skiing'},
    {icon: 'fas fa-stroopwafel', label: 'Deserts'},
  ]
  homes = homeResources;
  constructor() { }

  ngOnInit(): void {}

  viewDetail(index: number) {
    this.detailViewComp?.openModal(index);
  }
  openFiterModal() {
    this.filterComp?.openModal()
  }

}
