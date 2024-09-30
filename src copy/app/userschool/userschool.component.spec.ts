import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserschoolComponent } from './userschool.component';

describe('UserschoolComponent', () => {
  let component: UserschoolComponent;
  let fixture: ComponentFixture<UserschoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserschoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
