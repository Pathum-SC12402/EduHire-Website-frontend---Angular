import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCreateProfileComponent } from './s-create-profile.component';

describe('SCreateProfileComponent', () => {
  let component: SCreateProfileComponent;
  let fixture: ComponentFixture<SCreateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SCreateProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SCreateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
