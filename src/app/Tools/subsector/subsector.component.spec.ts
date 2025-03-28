import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsectorComponent } from './subsector.component';

describe('SubsectorComponent', () => {
  let component: SubsectorComponent;
  let fixture: ComponentFixture<SubsectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubsectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
