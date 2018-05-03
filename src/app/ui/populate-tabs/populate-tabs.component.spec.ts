import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulateTabsComponent } from './populate-tabs.component';

describe('PopulateTabsComponent', () => {
  let component: PopulateTabsComponent;
  let fixture: ComponentFixture<PopulateTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulateTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulateTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
