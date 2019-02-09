import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputboxdirectiveComponent } from './inputboxdirective.component';

describe('InputboxdirectiveComponent', () => {
  let component: InputboxdirectiveComponent;
  let fixture: ComponentFixture<InputboxdirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputboxdirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputboxdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
