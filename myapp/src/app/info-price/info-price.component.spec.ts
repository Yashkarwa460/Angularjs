import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPriceComponent } from './info-price.component';

describe('InfoPriceComponent', () => {
  let component: InfoPriceComponent;
  let fixture: ComponentFixture<InfoPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
