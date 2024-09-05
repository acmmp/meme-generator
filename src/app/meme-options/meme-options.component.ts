// meme-options.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meme-options',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './meme-options.component.html',
  styleUrls: ['./meme-options.component.css']
})
export class MemeOptionsComponent {
  topText: string = '';
  bottomText: string = '';
  imageUrl: string = '';

  @Output() memeGenerated = new EventEmitter<{ topText: string, bottomText: string, imageUrl: string }>();

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  generateMeme(): void {
    this.memeGenerated.emit({
      topText: this.topText,
      bottomText: this.bottomText,
      imageUrl: this.imageUrl
    });
  }
}
