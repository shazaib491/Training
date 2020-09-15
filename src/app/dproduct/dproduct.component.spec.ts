import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DproductComponent } from './dproduct.component';

describe('DproductComponent', () => {
  let component: DproductComponent;
  let fixture: ComponentFixture<DproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
