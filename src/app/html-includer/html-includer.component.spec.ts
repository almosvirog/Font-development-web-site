import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlIncluderComponent } from './html-includer.component';

describe('HtmlIncluderComponent', () => {
  let component: HtmlIncluderComponent;
  let fixture: ComponentFixture<HtmlIncluderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlIncluderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlIncluderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
