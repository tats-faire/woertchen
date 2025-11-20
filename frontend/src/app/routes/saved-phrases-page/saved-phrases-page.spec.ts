import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPhrasesPage } from './saved-phrases-page';

describe('SavedPhrasesPage', () => {
  let component: SavedPhrasesPage;
  let fixture: ComponentFixture<SavedPhrasesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedPhrasesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedPhrasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
