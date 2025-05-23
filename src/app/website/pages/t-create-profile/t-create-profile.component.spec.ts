import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCreateProfileComponent } from './t-create-profile.component';

describe('TCreateProfileComponent', () => {
  let component: TCreateProfileComponent;
  let fixture: ComponentFixture<TCreateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TCreateProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TCreateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
