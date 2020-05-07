import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialBottonComponent } from './material-botton.component';

describe('MaterialBottonComponent', () => {
  let component: MaterialBottonComponent;
  let fixture: ComponentFixture<MaterialBottonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialBottonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
