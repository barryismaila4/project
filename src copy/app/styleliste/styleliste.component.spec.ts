import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylelisteComponent } from './styleliste.component';

describe('StylelisteComponent', () => {
  let component: StylelisteComponent;
  let fixture: ComponentFixture<StylelisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StylelisteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StylelisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
