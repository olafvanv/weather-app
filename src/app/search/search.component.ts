import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  constructor(private route: Router) { }

  goToResults(city) {
    if (city === '') {
      alert('Enter value please')
    } else {
      this.route.navigate(['/results/', city]);
    }
  }

  ngOnInit() {
  }

}
