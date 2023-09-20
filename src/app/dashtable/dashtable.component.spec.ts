import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashtableComponent } from './dashtable.component';

describe('DashtableComponent', () => {
  let component: DashtableComponent;
  let fixture: ComponentFixture<DashtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
