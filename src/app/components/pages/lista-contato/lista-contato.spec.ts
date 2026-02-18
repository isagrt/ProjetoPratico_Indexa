import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContato } from './lista-contato';

describe('ListaContato', () => {
  let component: ListaContato;
  let fixture: ComponentFixture<ListaContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaContato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaContato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

