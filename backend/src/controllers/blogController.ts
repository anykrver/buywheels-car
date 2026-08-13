import { Request, Response } from 'express';
import { mockBlogs } from '../data/mockDatabase';

export const blogController = {
  getAllPosts: (req: Request, res: Response) => {
    res.json({ status: 'success', count: mockBlogs.length, data: mockBlogs });
  },
  getPostBySlug: (req: Request, res: Response) => {
    const { slug } = req.params;
    const post = mockBlogs.find(b => b.slug === slug || b.id === slug);
    if (!post) {
      return res.status(404).json({ status: 'error', message: 'Blog post not found' });
    }
    res.json({ status: 'success', data: post });
  }
};
