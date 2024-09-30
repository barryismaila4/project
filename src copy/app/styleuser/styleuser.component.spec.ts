import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleuserComponent } from './styleuser.component';

describe('StyleuserComponent', () => {
  let component: StyleuserComponent;
  let fixture: ComponentFixture<StyleuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StyleuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyleuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
