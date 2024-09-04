import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacontrasenaComponent } from './cacontrasena.component';

describe('CacontrasenaComponent', () => {
  let component: CacontrasenaComponent;
  let fixture: ComponentFixture<CacontrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CacontrasenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CacontrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
