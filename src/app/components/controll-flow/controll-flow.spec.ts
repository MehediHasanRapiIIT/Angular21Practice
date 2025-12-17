import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllFlow } from './controll-flow';

describe('ControllFlow', () => {
  let component: ControllFlow;
  let fixture: ComponentFixture<ControllFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControllFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
