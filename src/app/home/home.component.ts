import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailViewComponent } from '../detail-view/detail-view.component';
import { homeResources } from '../resources/homes';

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
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {}

  viewDetail(index: number) {
    const option = {modalDialogClass: 'modal-float-right', animation: true}
    const modalRef = this.modalService.open(DetailViewComponent, option);
    modalRef.componentInstance.homeIndex = index;
  }

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
