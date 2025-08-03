export interface Post {
  id: string;
  author: {
    id: string;
    name: string;
    profileImage: string;
  };
  content: string;
  image: string;
  createdAt: Date;
  likes: number;
  comments: number;
}

export interface PostResponse {
  posts: Post[];
  total: number;
  page: number;
  hasMore: boolean;
}