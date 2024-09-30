import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdcourseComponent } from './updcourse.component';

describe('UpdcourseComponent', () => {
  let component: UpdcourseComponent;
  let fixture: ComponentFixture<UpdcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdcourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
