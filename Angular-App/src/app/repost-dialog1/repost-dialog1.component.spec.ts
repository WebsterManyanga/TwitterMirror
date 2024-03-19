import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepostDialog1Component } from './repost-dialog1.component';

describe('RepostDialog1Component', () => {
  let component: RepostDialog1Component;
  let fixture: ComponentFixture<RepostDialog1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepostDialog1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepostDialog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
