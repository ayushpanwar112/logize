import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigneeFormComponent } from './consignee-form.component';

describe('ConsigneeFormComponent', () => {
  let component: ConsigneeFormComponent;
  let fixture: ComponentFixture<ConsigneeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsigneeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsigneeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
