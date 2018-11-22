import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.updateTag({ name: 'description', content: 'Angular Universal - Our services' })
    this.title.setTitle('Our services');
  }

  ngOnInit() {
  }

}
