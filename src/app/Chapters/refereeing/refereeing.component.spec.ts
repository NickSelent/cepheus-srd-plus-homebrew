import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeingComponent } from './refereeing.component';

describe('RefereeingComponent', () => {
  let component: RefereeingComponent;
  let fixture: ComponentFixture<RefereeingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefereeingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefereeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
