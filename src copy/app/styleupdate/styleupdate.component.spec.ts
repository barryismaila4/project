import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleupdateComponent } from './styleupdate.component';

describe('StyleupdateComponent', () => {
  let component: StyleupdateComponent;
  let fixture: ComponentFixture<StyleupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StyleupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyleupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
