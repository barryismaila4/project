import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleaddComponent } from './styleadd.component';

describe('StyleaddComponent', () => {
  let component: StyleaddComponent;
  let fixture: ComponentFixture<StyleaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StyleaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyleaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
