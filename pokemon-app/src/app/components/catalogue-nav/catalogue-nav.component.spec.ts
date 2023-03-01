import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueNavComponent } from './catalogue-nav.component';

describe('CatalogueNavComponent', () => {
  let component: CatalogueNavComponent;
  let fixture: ComponentFixture<CatalogueNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogueNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
