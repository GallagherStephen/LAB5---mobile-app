import { Component, OnInit } from '@angular/core';
import{HalfService} from '../service/half.service'; //<-----------------imported for service


@Component({
  selector: 'app-english',
  templateUrl: './english.component.html'
})
export class EnglishComponent implements OnInit {

  constructor(private halfService:HalfService) { } //<-------------edited for service( added as an argument )

  ngOnInit() {
  }
  number : number;
	half : number;

  	getHalf() {
      //this.half = this.number/2;
      this.half = this.halfService.getHalf(this.number); //<------------- (provoked)
  	}

}
