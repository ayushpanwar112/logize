import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigneeDeleteComponent } from './consignee-delete.component';

describe('ConsigneeDeleteComponent', () => {
  let component: ConsigneeDeleteComponent;
  let fixture: ComponentFixture<ConsigneeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsigneeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsigneeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
