import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaadminComponent } from './vistaadmin.component';

describe('VistaadminComponent', () => {
  let component: VistaadminComponent;
  let fixture: ComponentFixture<VistaadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
