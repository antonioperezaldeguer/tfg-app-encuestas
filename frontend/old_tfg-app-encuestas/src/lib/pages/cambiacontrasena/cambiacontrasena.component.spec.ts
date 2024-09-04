import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiacontrasenaComponent } from './cambiacontrasena.component';

describe('CambiacontrasenaComponent', () => {
  let component: CambiacontrasenaComponent;
  let fixture: ComponentFixture<CambiacontrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambiacontrasenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiacontrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
