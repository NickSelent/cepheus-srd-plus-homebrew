import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicledesignComponent } from './vehicledesign.component';

describe('VehicledesignComponent', () => {
  let component: VehicledesignComponent;
  let fixture: ComponentFixture<VehicledesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicledesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicledesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
