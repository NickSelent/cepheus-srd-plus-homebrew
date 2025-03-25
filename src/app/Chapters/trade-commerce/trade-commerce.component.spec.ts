import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeCommerceComponent } from './trade-commerce.component';

describe('TradeCommerceComponent', () => {
  let component: TradeCommerceComponent;
  let fixture: ComponentFixture<TradeCommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeCommerceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradeCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
