import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostService } from './services/post.service';
import { Post } from './models/post.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, PostItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'pet-side';
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe({
      next: (response) => {
        this.posts = response.posts;
      },
      error: (error) => {
        console.error('포스트 로딩 실패:', error);
      }
    });
  }
}
