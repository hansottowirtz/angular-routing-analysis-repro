import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalCompComponent } from './normal-comp.component';

describe('NormalCompComponent', () => {
  let component: NormalCompComponent;
  let fixture: ComponentFixture<NormalCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
