import { Component, OnInit, Input } from '@angular/core';
import { Paragraph } from '../models/paragraph';

@Component({
  selector: 'page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit {

  constructor() { }
  
  @Input()
  paragraph: Paragraph;

  ngOnInit() {
  }

}
