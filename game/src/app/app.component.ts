import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'White Hat Gaming';

  constructor(private router: Router) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.navigateTo();
  }

  navigateTo(): void {
    this.router.navigate(['/new-games']);
  }
}
