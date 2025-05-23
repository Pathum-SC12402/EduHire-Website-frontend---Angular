import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntituteIntroComponent } from './intitute-intro.component';

describe('IntituteIntroComponent', () => {
  let component: IntituteIntroComponent;
  let fixture: ComponentFixture<IntituteIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntituteIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntituteIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
