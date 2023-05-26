import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  typeOfPlaces = [
    {title: 'Entire Place', details: 'A place all to yourself'},
    {title: 'Private room', details: 'Your own room in a home or a hotel, plus some shared common spaces.'},
    {title: 'Shared room', details: 'A sleeping space and common areas that may be shared with others.'},
  ]
  rooms = [
    {title: 'Bedrooms', options: ['Any', 1, 2, 3, 4, '5+']},
    {title: 'Beds', options: ['Any', 1, 2, 3, 4, '5+']},
    {title: 'Bathrooms', options: ['Any', 1, 2, 3, 4, '5+']},
  ]
  ngOnInit(): void {
    this.initializeModal()
  }
  openModal() {
    const modal: any = document.getElementById("filter-modal");
    modal.style.display = "block";
    modal.classList.remove("modal-closed");
    modal.classList.add("modal-open");
    document.querySelector('body')?.classList.add('modal-open')
  }
  initializeModal() {
    const modal: any =  document.getElementById("filter-modal")
    modal.addEventListener("click", function (event: any) {
      if (event.target === modal || event.target.classList.contains("close")) {
        modal.classList.remove("modal-open");
        modal.classList.add("modal-closed");
        document.querySelector('body')?.classList.remove('modal-open')
        setTimeout(function () {
          modal.style.display = "none";
        }, 300);
      }
    });
  }

}
