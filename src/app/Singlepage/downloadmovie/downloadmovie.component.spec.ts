import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadmovieComponent } from './downloadmovie.component';

describe('DownloadmovieComponent', () => {
  let component: DownloadmovieComponent;
  let fixture: ComponentFixture<DownloadmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
