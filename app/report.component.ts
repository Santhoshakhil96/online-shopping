import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  storedPosts = []

  constructor() { }

  ngOnInit() {
  }

  onPostAdded(event) {
    this.storedPosts.push(event);
  }

}
