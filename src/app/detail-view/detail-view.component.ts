import { Component, Input, OnInit } from '@angular/core';
import { homeResources } from '../resources/homes';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit  {
  @Input() homeIndex = 0;
  modal: HTMLElement | null = document.getElementById("modal")
  homes = homeResources;
  selectedHome = this.homes[this.homeIndex];
  imgBaseUrl = 'https://res.cloudinary.com/dx5bcp5ps/image/upload/v1685139853/monniepoint/';

  infos = [
    {icon: 'fas fa-male', label: '16+ guests'},
    {icon: 'fas fa-bed', label: '8 bedrooms'},
    {icon: 'fas fa-dolly-flatbed', label: '8 beds'},
    {icon: 'fas fa-shower', label: '8 baths'},
  ]
  mainInfos = [
    {icon: 'fas fa-laptop-code', title: 'Dedicated workspace', desc: 'A private room with wifi that’s well-suited for working.'},
    {icon: 'fas fa-user-check', title: 'Self check-in', desc: 'Check yourself in with the keypad.'},
    {icon: 'fas fa-calendar-check', title: 'Free cancellation before Jul 25', desc: 'A private room with wifi that’s well-suited for working.'},
  ]
  cart = [
    {title: '6 nights', amount: '$2,199'},
    {title: 'Cleaning fee', amount: '$85'},
    {title: 'Airbnb service fee', amount: '$322'},
  ]
  details = {
    about_this_space: 'Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna Gaines. Originally the carriage house for Hillcrest Estate, this home includes one bedroom, one bath, an office nook and a private back patio. This makes it the perfect getaway for a party of two, or if you’re stopping through town and need a restful place to retreat.',
    the_space: 'An open living, dining, and kitchen area provide ample room in this cozy cottage. French double doors lead you out to the back patio to enjoy your own private outdoor space. A dedicated, covered parking spot for your use. The parking lot is shared with Hillcrest Estate guests.'
  }
  placeOffers = [
    {icon: 'fas fa-sink', label: 'Kitchen'},
    {icon: 'fas fa-umbrella-beach', label: 'Private patio or balcony'}, 
    {icon: 'fas fa-air-freshener', label: 'Centrail air conditioning'}, 
    {icon: 'fas fa-laptop-code', label: 'Dedicated workspaces'}, 
    {icon: 'fas fa-wifi', label: 'Wifi'}, 
    {icon: 'fas fa-bed', label: 'Heating'}, 
    {icon: 'fas fa-tv', label: '55” 4k TV'}, 
    {icon: 'fas fa-car', label: '1 parking space'}, 
    {icon: 'fas fa-camera', label: 'Security cameras'}, 
    {icon: 'fas fa-soap', label: 'Free dryer - in unit'}, 
    {icon: 'fas fa-pump-soap', label: 'Free washer - in unit'}, 
    {icon: 'fas fa-fan', label: 'Ceiling fans'}, 
  ]
  reviewRatings = [
    {label: 'Cleanliness', width: 100, rating: 5.0},
    {label: 'Accuracy', width: 95, rating: 4.9},
    {label: 'Communication', width: 90, rating: 4.8},
    {label: 'Location', width: 85, rating: 4.7},
    {label: 'Check-in', width: 80, rating: 4.6},
    {label: 'Value', width: 70, rating: 4.2},
  ]
  reviews = [
    {img: '', name: 'Steve', date: 'Jan 2023', review: 'Abbe\'s place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. I\'m so grateful.'},
    {img: '', name: 'Emily', date: 'Feb 2023', review: 'The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.'},
    {img: '', name: 'Daniel', date: 'March 2023', review: 'Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively.'},
    {img: '', name: 'Daniel', date: 'April 2023', review: 'Abbe’s tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.'},
  ]

  ngOnInit(): void {
    this.initializeModal();
  }

  openModal(homeIndex: number) {
    this.selectedHome = this.homes[homeIndex];
    const modal: any = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.remove("modal-closed");
    modal.classList.add("modal-open");
    document.querySelector('body')?.classList.add('modal-open')
  }
  initializeModal() {
    const modal: any =  document.getElementById("modal")
    modal.addEventListener("click", function (event: any) {
      if (event.target === modal || event.target.classList.contains("close")) {
        modal.classList.remove("modal-open");
        modal.classList.add("modal-closed");
        document.querySelector('body')?.classList.remove('modal-open')
        // document.
        setTimeout(function () {
          modal.style.display = "none";
        }, 300);
      }
    });
  }


}
