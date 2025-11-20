import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationPage } from './generation-page';

describe('GenerationPage', () => {
  let component: GenerationPage;
  let fixture: ComponentFixture<GenerationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
