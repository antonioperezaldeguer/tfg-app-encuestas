import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecontrasenaComponent } from './recontrasena.component';

describe('RecontrasenaComponent', () => {
  let component: RecontrasenaComponent;
  let fixture: ComponentFixture<RecontrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecontrasenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecontrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
