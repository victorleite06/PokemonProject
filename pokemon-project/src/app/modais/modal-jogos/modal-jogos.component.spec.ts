import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJogosComponent } from './modal-jogos.component';

describe('ModalJogosComponent', () => {
  let component: ModalJogosComponent;
  let fixture: ComponentFixture<ModalJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalJogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
