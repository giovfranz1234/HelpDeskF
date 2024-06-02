import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CierreRegComponent } from './cierre-reg.component';

describe('CierreRegComponent', () => {
  let component: CierreRegComponent;
  let fixture: ComponentFixture<CierreRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CierreRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CierreRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
