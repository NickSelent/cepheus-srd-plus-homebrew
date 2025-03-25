import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipDesignConstructionComponent } from './ship-design-construction.component';

describe('ShipDesignConstructionComponent', () => {
  let component: ShipDesignConstructionComponent;
  let fixture: ComponentFixture<ShipDesignConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipDesignConstructionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipDesignConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
