import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvProfileComponent } from './iv-profile.component';

describe('IvProfileComponent', () => {
  let component: IvProfileComponent;
  let fixture: ComponentFixture<IvProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IvProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
