import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokenComponent } from './poken.component';

describe('PokenComponent', () => {
  let component: PokenComponent;
  let fixture: ComponentFixture<PokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
