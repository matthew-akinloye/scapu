import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  @ViewChild(IonContent, { static: false }) content!: IonContent; // Get reference to ion-content

  stories = Array(10).fill(null);
  fabOpacity: number = 1;
  isModalOpen = false;

  private scrollTimeout: any;

  posts: string[] = [];
  randomizedPosts: string[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.generateRandomPosts();
  }

  handleRefresh(event: any) {
    this.generateRandomPosts();
    setTimeout(() => {
      event.detail.complete();
    }, 1000);
  }

  generateRandomPosts() {
    const mediaCount = Math.floor(Math.random() * 15) + 5; // 5-20 media posts
    const textCount = Math.floor(Math.random() * 15) + 5; // 5-20 text posts

    const mediaPosts = Array(mediaCount).fill('media');
    const textPosts = Array(textCount).fill('text');

    this.posts = mediaPosts.concat(textPosts);
    this.shufflePosts();
  }

  shufflePosts() {
    this.randomizedPosts = this.posts
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  ngAfterViewInit() {
    // Listen to scroll events from IonContent
    this.content.scrollEvents = true;
    this.content.ionScroll.subscribe(() => this.onScroll());
  }

  onScroll() {
    this.fabOpacity = 0.3;

    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    // Restore full opacity after 500ms of no scrolling
    this.scrollTimeout = setTimeout(() => {
      this.fabOpacity = 1;
    }, 500);
  }


  openModal() {
    this.isModalOpen = true;
    this.fabOpacity = 0; // Optionally hide the FAB when modal is open
  }

  // // Close the modal
  // closeModal() {
  //   this.isModalOpen = false;
  //   this.fabOpacity = 1; // Restore FAB opacity
  // }
  // Close the modal and wait for animation
  closeModal(): Promise<void> {
    return new Promise((resolve) => {
      this.isModalOpen = false;
      this.fabOpacity = 1;
      setTimeout(() => resolve(), 300); // Match animation duration
    });
  }

  async selectOption(option: string) {
    console.log('Selected Option:', option);
    this.closeModal();

    switch (option) {
      case 'media':
        await this.navigateToMediaPostUpload();
        break;
      case 'camera':
        await this.navigateToCameraPostUpload();
        break;
      case 'text':
        await this.navigateToTextPostUpload();
        break;
      case 'audio':
        await this.navigateToAudioPostUpload();
        break;
      default:
        console.log('Unknown option');
    }
  }

  async navigateToMediaPostUpload() {
    await this.closeModal();
    this.router.navigate(['/mediapostupload']);
  }


  async navigateToCameraPostUpload() {
    await this.closeModal();
    this.router.navigate(['/camerapostupload']);
  }

  async navigateToTextPostUpload() {
    await this.closeModal();
    this.router.navigate(['/textpostupload']);
  }

  async navigateToAudioPostUpload() {
    await this.closeModal();
    this.router.navigate(['/audiopostupload']);
  }


}
