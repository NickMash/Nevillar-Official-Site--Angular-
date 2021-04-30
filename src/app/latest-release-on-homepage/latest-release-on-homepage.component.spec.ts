import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestReleaseOnHomepageComponent } from './latest-release-on-homepage.component';

describe('LatestReleaseOnHomepageComponent', () => {
  let component: LatestReleaseOnHomepageComponent;
  let fixture: ComponentFixture<LatestReleaseOnHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestReleaseOnHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestReleaseOnHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
