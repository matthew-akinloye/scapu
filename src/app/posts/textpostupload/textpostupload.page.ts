import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-textpostupload',
  templateUrl: './textpostupload.page.html',
  styleUrls: ['./textpostupload.page.scss'],
  standalone: false,
})
export class TextpostuploadPage implements OnInit {
  caption = '';
  location = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openLocationSearch() {
    this.location = 'New York, NY';
  }

  goToPreview() {
    this.router.navigate(['/previewpost'], {
      queryParams: { mediaType: "text", caption: this.caption, location: this.location }
    });
  }
}
