import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposRegComponent } from './equipos-reg.component';

describe('EquiposRegComponent', () => {
  let component: EquiposRegComponent;
  let fixture: ComponentFixture<EquiposRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiposRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
