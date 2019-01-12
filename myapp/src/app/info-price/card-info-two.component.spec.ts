import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoTwoComponent } from './card-info-two.component';

describe('CardInfoTwoComponent', () => {
  let component: CardInfoTwoComponent;
  let fixture: ComponentFixture<CardInfoTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInfoTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
