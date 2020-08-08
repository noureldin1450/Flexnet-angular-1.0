import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqpageComponent } from './reqpage.component';

describe('ReqpageComponent', () => {
  let component: ReqpageComponent;
  let fixture: ComponentFixture<ReqpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
