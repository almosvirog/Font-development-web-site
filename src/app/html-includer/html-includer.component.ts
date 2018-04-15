import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'html-includer',
  template: `
<div [innerHtml]="html">
</div>
`,
  providers: [HttpClient]
})
export class HtmlIncluderComponent implements OnChanges, OnInit {
  @Input() url: string;

  constructor(private http: HttpClient) { }

  html: string;

  private loadHtml() {
    this.http.get(this.url, { responseType: 'text' }).subscribe(
      gotHtml => this.html = gotHtml,
      err => this.html = "<h1> Не удалось загрузить страницу<h1>"
    );
  }

  ngOnInit() {
    this.loadHtml();
  }

  ngOnChanges() {
    this.loadHtml();
  }
}
