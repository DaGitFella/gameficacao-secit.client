import { Component } from '@angular/core';

@Component({
  selector: 'app-stamps',
  standalone: true,
  imports: [],
  templateUrl: './stamps.component.html',
  styleUrl: './stamps.component.css'
})
export class StampsComponent {
  imageSrc: string | ArrayBuffer | null = null;
  defaultImage: string = 'quadrado lindo.svg';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imageSrc = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  triggerFileInput(): void {
    document.getElementById('fileInput')?.click();
  }
}
