import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { Book } from '../models/content';
import { Paragraph } from '../models/paragraph';

@Component({
  selector: 'book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.css']
})
export class BookContentComponent implements OnInit {

  constructor(private dataProvider : DataProviderService) { }

  book : Book;

  selectedParagraph : Paragraph;

  ngOnInit() {
    this.dataProvider.getBook().subscribe(gotBook => this.book = gotBook);
    this.selectedParagraph = this.book.parts[0].paragraphs[0];
  }

  onSelect(paragraph: Paragraph):void {
    this.selectedParagraph = paragraph;
  }

}
