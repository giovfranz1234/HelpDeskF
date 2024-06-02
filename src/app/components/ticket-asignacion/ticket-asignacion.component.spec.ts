import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketAsignacionComponent } from './ticket-asignacion.component';

describe('TicketAsignacionComponent', () => {
  let component: TicketAsignacionComponent;
  let fixture: ComponentFixture<TicketAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketAsignacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
