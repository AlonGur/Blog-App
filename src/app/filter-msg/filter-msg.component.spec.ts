import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMsgComponent } from './filter-msg.component';

describe('FilterMsgComponent', () => {
  let component: FilterMsgComponent;
  let fixture: ComponentFixture<FilterMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
