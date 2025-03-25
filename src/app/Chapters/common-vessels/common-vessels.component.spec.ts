import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonVesselsComponent } from './common-vessels.component';

describe('CommonVesselsComponent', () => {
  let component: CommonVesselsComponent;
  let fixture: ComponentFixture<CommonVesselsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonVesselsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonVesselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
