import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonAircraftComponent } from './common-aircraft.component';

describe('CommonAircraftComponent', () => {
  let component: CommonAircraftComponent;
  let fixture: ComponentFixture<CommonAircraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonAircraftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonAircraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
