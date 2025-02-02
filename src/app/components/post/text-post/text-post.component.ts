import { Component } from '@angular/core';

@Component({
  selector: 'app-text-post',
  templateUrl: './text-post.component.html',
  styleUrls: ['./text-post.component.scss'],
  standalone:false,
})
export class TextPostComponent {

  constructor() { }
  // Initial counts
  likeCount = 125;
  commentCount = 35;
  cheersCount = 10;
  repostCount = 5;
  shareCount = 8;

  // Track clicked states for icon color change and animations
  liked = false;
  commented = false;
  cheersed = false;
  reposted = false;
  shared = false;

  // Toggle like state
  toggleLike() {
    this.liked = !this.liked;
    if (this.liked) {
      this.likeCount++;
    } else {
      this.likeCount--;
    }
  }

  // Toggle comment state
  toggleComment() {
    this.commented = !this.commented;
    if (this.commented) {
      this.commentCount++;
    } else {
      this.commentCount--;
    }
  }

  // Toggle cheers state
  toggleCheers() {
    this.cheersed = !this.cheersed;
    if (this.cheersed) {
      this.cheersCount++;
    } else {
      this.cheersCount--;
    }
  }

  // Toggle repost state
  toggleRepost() {
    this.reposted = !this.reposted;
    if (this.reposted) {
      this.repostCount++;
    } else {
      this.repostCount--;
    }
  }

  // Toggle share state
  toggleShare() {
    this.shared = !this.shared;
    if (this.shared) {
      this.shareCount++;
    } else {
      this.shareCount--;
    }
  }
}