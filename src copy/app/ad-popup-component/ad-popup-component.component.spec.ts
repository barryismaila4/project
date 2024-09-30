import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPopupComponentComponent } from './ad-popup-component.component';

describe('AdPopupComponentComponent', () => {
  let component: AdPopupComponentComponent;
  let fixture: ComponentFixture<AdPopupComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdPopupComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdPopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
