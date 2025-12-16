import { useState, useEffect } from 'react';
import { BlogAPI, BlogPost, BlogCategory, BlogTag, BlogComment, BlogSearchParams } from './api';

// Example usage of the BlogAPI

export class BlogService {
  // Get all blog posts with pagination
  static async getAllPosts(page: number = 1, limit: number = 10) {
    const params: BlogSearchParams = {
      limit,
      offset: (page - 1) * limit,
      sort_by: 'published_at',
      sort_order: 'desc'
    };

    return await BlogAPI.getBlogPosts(params);
  }

  // Get featured blog posts
  static async getFeaturedPosts() {
    return await BlogAPI.getFeaturedPosts(6);
  }

  // Get posts by category
  static async getPostsByCategory(categorySlug: string, page: number = 1, limit: number = 10) {
    const params: BlogSearchParams = {
      category: categorySlug,
      limit,
      offset: (page - 1) * limit,
      sort_by: 'published_at',
      sort_order: 'desc'
    };

    return await BlogAPI.getBlogPosts(params);
  }

  // Get posts by tag
  static async getPostsByTag(tagSlug: string, page: number = 1, limit: number = 10) {
    const params: BlogSearchParams = {
      tag: tagSlug,
      limit,
      offset: (page - 1) * limit,
      sort_by: 'published_at',
      sort_order: 'desc'
    };

    return await BlogAPI.getBlogPosts(params);
  }

  // Search blog posts
  static async searchPosts(query: string, page: number = 1, limit: number = 10) {
    return await BlogAPI.searchBlogPosts(query, {
      limit,
      offset: (page - 1) * limit
    });
  }

  // Get a single blog post
  static async getPost(slug: string) {
    return await BlogAPI.getBlogPostBySlug(slug);
  }

  // Get related posts
  static async getRelatedPosts(postId: number) {
    return await BlogAPI.getRelatedPosts(postId, 3);
  }

  // Get all categories
  static async getCategories() {
    return await BlogAPI.getBlogCategories();
  }

  // Get all tags
  static async getTags() {
    return await BlogAPI.getBlogTags();
  }

  // Get blog comments
  static async getComments(postId: number) {
    return await BlogAPI.getBlogComments(postId);
  }

  // Add a comment
  static async addComment(postId: number, commentData: {
    author_name: string;
    author_email: string;
    content: string;
  }) {
    return await BlogAPI.createBlogComment(postId, commentData);
  }

  // Like a post
  static async likePost(postId: number) {
    return await BlogAPI.likePost(postId);
  }

  // Increment post views
  static async viewPost(postId: number) {
    return await BlogAPI.incrementPostViews(postId);
  }

  // Get blog statistics
  static async getStats() {
    return await BlogAPI.getBlogStats();
  }

  // Get blog archive
  static async getArchive() {
    return await BlogAPI.getBlogArchive();
  }

  // Get posts by date
  static async getPostsByDate(year: number, month: number, page: number = 1, limit: number = 10) {
    return await BlogAPI.getBlogPostsByDate(year, month, {
      limit,
      offset: (page - 1) * limit
    });
  }
}

// Example React hook for using blog data
export const useBlogPosts = (params?: BlogSearchParams) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const result = await BlogAPI.getBlogPosts(params);
        setPosts(result.posts);
        setTotal(result.total);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [params]);

  return { posts, loading, error, total };
};

// Example React hook for blog categories
export const useBlogCategories = () => {
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const result = await BlogAPI.getBlogCategories();
        setCategories(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

// Example React hook for blog tags
export const useBlogTags = () => {
  const [tags, setTags] = useState<BlogTag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        setLoading(true);
        const result = await BlogAPI.getBlogTags();
        setTags(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch tags');
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  return { tags, loading, error };
};

// Example React hook for a single blog post
export const useBlogPost = (slug: string) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const result = await BlogAPI.getBlogPostBySlug(slug);
        setPost(result);

        // Increment views when post is loaded
        if (result.id) {
          await BlogAPI.incrementPostViews(result.id);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch post');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return { post, loading, error };
};

// Example React hook for blog comments
export const useBlogComments = (postId: number) => {
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const result = await BlogAPI.getBlogComments(postId);
        setComments(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch comments');
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchComments();
    }
  }, [postId]);

  const addComment = async (commentData: {
    author_name: string;
    author_email: string;
    content: string;
  }) => {
    try {
      const newComment = await BlogAPI.createBlogComment(postId, commentData);
      setComments(prev => [...prev, newComment]);
      return newComment;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to add comment');
    }
  };

  return { comments, loading, error, addComment };
};
