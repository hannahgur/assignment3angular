import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CataloguePokeElemComponent } from './catalogue-poke-elem.component';

describe('CataloguePokeElemComponent', () => {
  let component: CataloguePokeElemComponent;
  let fixture: ComponentFixture<CataloguePokeElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CataloguePokeElemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CataloguePokeElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
