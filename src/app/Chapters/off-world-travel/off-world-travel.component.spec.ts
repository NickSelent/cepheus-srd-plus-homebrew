import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffWorldTravelComponent } from './off-world-travel.component';

describe('OffWorldTravelComponent', () => {
  let component: OffWorldTravelComponent;
  let fixture: ComponentFixture<OffWorldTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffWorldTravelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffWorldTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
