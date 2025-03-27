import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppendixaComponent } from './appendixa.component';

describe('AppendixaComponent', () => {
  let component: AppendixaComponent;
  let fixture: ComponentFixture<AppendixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppendixaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppendixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
