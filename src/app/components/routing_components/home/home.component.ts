import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // title = 'app';
  // results = '';
  // dataset = this.getJson();
  constructor(
    //private http: HttpClient
  ){
  }
  ngOnInit(): void {
    // this.http.get('http://localhost:8080/datalogger').subscribe(data => {
    //   console.log(data);
    //
    // });
  }

//   getJson(): string{
//     this.http.get('http://localhost:8080/time').subscribe(data => {
//       console.log(data.time);
//       this.dataset = data.time;
//   });
// }
}
