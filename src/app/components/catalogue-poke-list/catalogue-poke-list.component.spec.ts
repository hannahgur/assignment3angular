import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CataloguePokeListComponent } from './catalogue-poke-list.component';

describe('CataloguePokeListComponent', () => {
  let component: CataloguePokeListComponent;
  let fixture: ComponentFixture<CataloguePokeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CataloguePokeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CataloguePokeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
