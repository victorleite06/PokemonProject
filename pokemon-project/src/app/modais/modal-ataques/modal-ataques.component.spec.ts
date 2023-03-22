import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAtaquesComponent } from './modal-ataques.component';

describe('ModalAtaquesComponent', () => {
  let component: ModalAtaquesComponent;
  let fixture: ComponentFixture<ModalAtaquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAtaquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAtaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
