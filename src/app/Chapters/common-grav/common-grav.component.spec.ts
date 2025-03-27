import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonGravComponent } from './common-grav.component';

describe('CommonGravComponent', () => {
  let component: CommonGravComponent;
  let fixture: ComponentFixture<CommonGravComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonGravComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonGravComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
