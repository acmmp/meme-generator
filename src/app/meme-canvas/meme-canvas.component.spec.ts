import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeCanvasComponent } from './meme-canvas.component';

describe('MemeCanvasComponent', () => {
  let component: MemeCanvasComponent;
  let fixture: ComponentFixture<MemeCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemeCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
