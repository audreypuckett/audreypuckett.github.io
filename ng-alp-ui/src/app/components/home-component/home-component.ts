import { Component } from '@angular/core';
import {HomeService} from '../../services/home-service';
import {SimpleMessage} from '../../models/simple-message';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

  message ='';

  constructor(private homeApiService: HomeService) {
  }

  ngOnInit(){
    this.homeApiService.getWelcome().subscribe(
      {
        next:(data: SimpleMessage) =>{
          this.message = data.message;
        },
        error: (error) => {
          console.error(error);
          this.message = "Having trouble with API but welcome :)";
        }
      }
    );
  }
}
