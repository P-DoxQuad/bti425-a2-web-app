import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDefnitionComponent } from './edit-defnition.component';

describe('EditDefnitionComponent', () => {
  let component: EditDefnitionComponent;
  let fixture: ComponentFixture<EditDefnitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDefnitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDefnitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
