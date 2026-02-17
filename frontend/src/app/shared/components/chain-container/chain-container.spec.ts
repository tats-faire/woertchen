import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainContainer } from './chain-container';

describe('ChainContainer', () => {
  let component: ChainContainer;
  let fixture: ComponentFixture<ChainContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChainContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChainContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
