import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineComComponent } from './inline-com.component';

describe('InlineComComponent', () => {
  let component: InlineComComponent;
  let fixture: ComponentFixture<InlineComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
