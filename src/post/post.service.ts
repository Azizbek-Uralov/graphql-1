import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { CreatePostInput } from './dto/create-post.input';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostInput: CreatePostInput) {
    const post = await this.prisma.post.create({ data: createPostInput });
    return post;
  }

  async findAll() {
    const posts = await this.prisma.post.findMany();
    return posts;
  }

  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) {
      throw new NotFoundException('bunda user topilmadi');
    }
    return post;
  }

  async update(id: number, updateUserInput) {
    const post = await this.prisma.post.update({
      where: { id },
      data: updateUserInput,
    });
    return post;
  }

  async remove(id: number) {
    const post = await this.prisma.post.delete({ where: { id } });
    return [];
  }
}
