import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvIntroComponent } from './iv-intro.component';

describe('IvIntroComponent', () => {
  let component: IvIntroComponent;
  let fixture: ComponentFixture<IvIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IvIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
