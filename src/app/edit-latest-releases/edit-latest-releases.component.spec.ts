import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLatestReleasesComponent } from './edit-latest-releases.component';

describe('EditLatestReleasesComponent', () => {
  let component: EditLatestReleasesComponent;
  let fixture: ComponentFixture<EditLatestReleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLatestReleasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLatestReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
