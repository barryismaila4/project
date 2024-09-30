import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatupdateComponent } from './catupdate.component';

describe('CatupdateComponent', () => {
  let component: CatupdateComponent;
  let fixture: ComponentFixture<CatupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
