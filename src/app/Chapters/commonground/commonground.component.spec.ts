import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommongroundComponent } from './commonground.component';

describe('CommongroundComponent', () => {
  let component: CommongroundComponent;
  let fixture: ComponentFixture<CommongroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommongroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommongroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
