import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteVisitorsComponent } from './website-visitors.component';

describe('WebsiteVisitorsComponent', () => {
  let component: WebsiteVisitorsComponent;
  let fixture: ComponentFixture<WebsiteVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteVisitorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
