import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpUpdateComponent } from './ip-update.component';

describe('IpUpdateComponent', () => {
  let component: IpUpdateComponent;
  let fixture: ComponentFixture<IpUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
