import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCompetation } from './project-competation';

describe('ProjectCompetation', () => {
  let component: ProjectCompetation;
  let fixture: ComponentFixture<ProjectCompetation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCompetation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCompetation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
