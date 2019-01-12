import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoThreeComponent } from './card-info-three.component';

describe('CardInfoThreeComponent', () => {
  let component: CardInfoThreeComponent;
  let fixture: ComponentFixture<CardInfoThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInfoThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfoThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
