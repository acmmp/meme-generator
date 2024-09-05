import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeOptionsComponent } from './meme-options.component';

describe('MemeOptionsComponent', () => {
  let component: MemeOptionsComponent;
  let fixture: ComponentFixture<MemeOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
