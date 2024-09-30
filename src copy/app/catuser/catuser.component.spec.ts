import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatuserComponent } from './catuser.component';

describe('CatuserComponent', () => {
  let component: CatuserComponent;
  let fixture: ComponentFixture<CatuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
