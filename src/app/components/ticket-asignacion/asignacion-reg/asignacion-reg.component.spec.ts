import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionRegComponent } from './asignacion-reg.component';

describe('AsignacionRegComponent', () => {
  let component: AsignacionRegComponent;
  let fixture: ComponentFixture<AsignacionRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
