import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post, PostResponse } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(page: number = 1, limit: number = 10): Observable<PostResponse> {
    // TODO: 실제 API 호출 구현
    // return this.http.get<PostResponse>(`/api/posts?page=${page}&limit=${limit}`);
    
    // 10개 목 데이터 생성
    const mockPosts: Post[] = Array.from({ length: 10 }, (_, i) => ({
      id: (i + 1).toString(),
      author: {
        id: `user${i + 1}`,
        name: `펫주인${i + 1}`,
        profileImage: `https://via.placeholder.com/40?text=${i + 1}`
      },
      content: `우리 반려동물과 함께한 즐거운 하루 ${i + 1}번째 이야기! 🐕🐱`,
      image: `https://plus.unsplash.com/premium_photo-1710406095492-7e62eba19745?q=80&w=2702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      createdAt: new Date(Date.now() - i * 1000 * 60 * 30), // 30분씩 이전
      likes: Math.floor(Math.random() * 50),
      comments: Math.floor(Math.random() * 10)
    }));

    return of({
      posts: mockPosts,
      total: 10,
      page: page,
      hasMore: false
    });
  }

  createPost(post: Omit<Post, 'id' | 'createdAt' | 'likes' | 'comments'>): Observable<Post> {
    // TODO: 실제 API 호출 구현
    // return this.http.post<Post>('/api/posts', post);
    
    return of({
      ...post,
      id: Date.now().toString(),
      createdAt: new Date(),
      likes: 0,
      comments: 0
    });
  }

  likePost(postId: string): Observable<boolean> {
    // TODO: 실제 API 호출 구현
    // return this.http.post<boolean>(`/api/posts/${postId}/like`, {});
    
    return of(true);
  }
}
