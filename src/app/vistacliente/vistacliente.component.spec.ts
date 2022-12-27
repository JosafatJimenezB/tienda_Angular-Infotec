import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaclienteComponent } from './vistacliente.component';

describe('VistaclienteComponent', () => {
  let component: VistaclienteComponent;
  let fixture: ComponentFixture<VistaclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
