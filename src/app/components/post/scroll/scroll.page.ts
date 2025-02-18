import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})
export class ScrollPage {
  @ViewChild(IonContent) content: IonContent | undefined;

  videos = [
    { id: 1, url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", likes: 1000, comments: 50, shares: 20 },
    { id: 2, url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", likes: 1500, comments: 75, shares: 30 },
    { id: 3, url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", likes: 2000, comments: 100, shares: 40 },
    // Add more demo videos here
  ]

  constructor() { }
  loadMoreVideos(event: any) {
    // Simulate loading more videos
    setTimeout(() => {
      const newVideos = [
        { id: this.videos.length + 1, url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", likes: 1200, comments: 60, shares: 25 },
        { id: this.videos.length + 2, url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", likes: 1800, comments: 90, shares: 35 },
      ]
      this.videos.push(...newVideos)
      event.target.complete()
    }, 1000)
  }

  likeVideo(video: { likes: number; }) {
    video.likes++
  }

  shareVideo(video: { shares: number; }) {
    video.shares++
    // Implement share functionality
  }

  commentVideo(video: any) {
    // Implement comment functionality
  }

  repostVideo(video: any) {
    // Implement repost functionality
  }
}
