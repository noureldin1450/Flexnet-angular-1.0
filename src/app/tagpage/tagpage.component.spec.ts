import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagpageComponent } from './tagpage.component';

describe('TagpageComponent', () => {
  let component: TagpageComponent;
  let fixture: ComponentFixture<TagpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
