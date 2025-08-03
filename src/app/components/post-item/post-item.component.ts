import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Post } from '../../models/post.interface';

@Component({
  selector: 'app-post-item',
  imports: [CommonModule, MatIconModule],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss'
})
export class PostItemComponent {
  @Input() post!: Post;
}
