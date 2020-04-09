import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllTermsComponent } from './list-all-terms.component';

describe('TermsComponent', () => {
  let component: ListAllTermsComponent;
  let fixture: ComponentFixture<ListAllTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
