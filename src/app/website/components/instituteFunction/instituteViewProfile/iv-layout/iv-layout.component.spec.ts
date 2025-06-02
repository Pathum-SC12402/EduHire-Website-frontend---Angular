import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvLayoutComponent } from './iv-layout.component';

describe('IvLayoutComponent', () => {
  let component: IvLayoutComponent;
  let fixture: ComponentFixture<IvLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IvLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
