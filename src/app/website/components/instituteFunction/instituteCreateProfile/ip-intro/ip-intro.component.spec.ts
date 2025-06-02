import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpIntroComponent } from './ip-intro.component';

describe('IpIntroComponent', () => {
  let component: IpIntroComponent;
  let fixture: ComponentFixture<IpIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
