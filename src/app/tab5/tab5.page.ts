import { Component } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: false,
})
export class Tab5Page {
  notifications = [
    {
      title: 'New Like',
      message: 'Alice liked your post!',
      icon: 'heart',
      avatar: 'https://i.pravatar.cc/50?img=1',
      time: '2m ago'
    },
    {
      title: 'New Comment',
      message: 'Bob commented on your post.',
      icon: 'chatbubble',
      avatar: 'https://i.pravatar.cc/50?img=2',
      time: '10m ago'
    },
    {
      title: 'Follow Request',
      message: 'John Doe sent you a follow request.',
      icon: 'person-add',
      avatar: 'https://i.pravatar.cc/50?img=3',
      time: '1h ago'
    },
    {
      title: 'System Update',
      message: 'A new update is available.',
      icon: 'alert-circle',
      avatar: 'https://i.pravatar.cc/50?img=4',
      time: '3h ago'
    }
  ];
}