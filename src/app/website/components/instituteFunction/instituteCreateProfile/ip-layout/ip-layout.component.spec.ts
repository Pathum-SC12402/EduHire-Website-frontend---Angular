import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpLayoutComponent } from './ip-layout.component';

describe('IpLayoutComponent', () => {
  let component: IpLayoutComponent;
  let fixture: ComponentFixture<IpLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
