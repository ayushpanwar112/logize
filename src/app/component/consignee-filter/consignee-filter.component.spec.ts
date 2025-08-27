import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigneeFilterComponent } from './consignee-filter.component';

describe('ConsigneeFilterComponent', () => {
  let component: ConsigneeFilterComponent;
  let fixture: ComponentFixture<ConsigneeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsigneeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsigneeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
