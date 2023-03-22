import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAreaEncontroComponent } from './modal-area-encontro.component';

describe('ModalAreaEncontroComponent', () => {
  let component: ModalAreaEncontroComponent;
  let fixture: ComponentFixture<ModalAreaEncontroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAreaEncontroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAreaEncontroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
