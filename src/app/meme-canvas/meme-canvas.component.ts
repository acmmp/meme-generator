// meme-canvas.component.ts
import { Component, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-meme-canvas',
  standalone: true,
  templateUrl: './meme-canvas.component.html',
  styleUrls: ['./meme-canvas.component.css']
})
export class MemeCanvasComponent implements OnChanges {
  @Input() imageUrl: string = '';
  @Input() topText: string = '';
  @Input() bottomText: string = '';
  @ViewChild('memeCanvas') canvas?: ElementRef<HTMLCanvasElement>;

  ngOnChanges(): void {
    this.drawMeme();
  }

  drawMeme(): void {
    if (!this.canvas) return;
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d')!;
    const image = new Image();
    image.src = this.imageUrl;
    image.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      ctx.font = '30px Impact';
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;

      // Texto superior
      ctx.fillText(this.topText, 50, 50);
      ctx.strokeText(this.topText, 50, 50);

      // Texto inferior
      ctx.fillText(this.bottomText, 50, canvas.height - 50);
      ctx.strokeText(this.bottomText, 50, canvas.height - 50);
    };
  }

  downloadMeme(): void {
    if (!this.canvas) return;
    const canvas = this.canvas.nativeElement;
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'meme.png';
    link.click();
  }
}
