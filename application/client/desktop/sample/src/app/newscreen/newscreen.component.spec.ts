import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscreenComponent } from './newscreen.component';

describe('NewscreenComponent', () => {
  let component: NewscreenComponent;
  let fixture: ComponentFixture<NewscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});