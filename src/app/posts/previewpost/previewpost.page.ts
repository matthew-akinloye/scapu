import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-previewpost',
  templateUrl: './previewpost.page.html',
  styleUrls: ['./previewpost.page.scss'],
  standalone:false,
})
export class PreviewpostPage implements OnInit {

  media: string | null = null;
  isImage = true;
  caption = '';
  location = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.media = params['media'];
      this.caption = params['caption'];
      this.location = params['location'];
      this.isImage = this.media ? !this.media.endsWith('.mp4') : true;
    });
  }

  postContent() {
    console.log('Post Uploaded:', { media: this.media, caption: this.caption, location: this.location });
    // Redirect after posting
    this.router.navigate(['/']);
  }
}