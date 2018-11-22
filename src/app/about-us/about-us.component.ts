import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.updateTag({ name: 'description', content: 'Angular Universal - About us' })
    this.title.setTitle('About us');
  }

  ngOnInit() {
  }

}
