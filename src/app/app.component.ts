import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  results = '';
  dataset = this.getJson();
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get('http://localhost:8000/json').subscribe(data => {
      console.log(data);

    });
  }

  getJson(): string{
    this.http.get('http://localhost:8000/time').subscribe(data => {
      console.log(data.time);
      this.dataset = data.time;
  }
}
