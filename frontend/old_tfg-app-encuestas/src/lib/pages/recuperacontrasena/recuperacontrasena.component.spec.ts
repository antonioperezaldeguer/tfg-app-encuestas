import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacontrasenaComponent } from './recuperacontrasena.component';

describe('RecuperacontrasenaComponent', () => {
  let component: RecuperacontrasenaComponent;
  let fixture: ComponentFixture<RecuperacontrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperacontrasenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperacontrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
