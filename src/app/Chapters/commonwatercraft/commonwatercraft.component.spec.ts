import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonwatercraftComponent } from './commonwatercraft.component';

describe('CommonwatercraftComponent', () => {
  let component: CommonwatercraftComponent;
  let fixture: ComponentFixture<CommonwatercraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonwatercraftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonwatercraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
