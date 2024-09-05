import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemeOptionsComponent } from './meme-options/meme-options.component';
import { MemeCanvasComponent } from './meme-canvas/meme-canvas.component';

interface Meme {
  imageUrl: string;
  topText: string;
  bottomText: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MemeOptionsComponent, MemeCanvasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  meme: Meme = { imageUrl: '', topText: '', bottomText: '' };

  updateMeme(newMeme: Meme): void {
    this.meme = { ...newMeme };
  }
}
