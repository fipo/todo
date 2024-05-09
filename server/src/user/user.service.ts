import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
// import { NewPost, UpdatePost } from 'src/graphql.schema';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // async create(input: NewPost): Promise<Post> {
  //   return this.prisma.post.create({
  //     data: input,
  //   });
  // }

  // async update(params: UpdatePost): Promise<Post> {
  //   const { id, ...params_without_id } = params;

  //   return this.prisma.post.update({
  //     where: {
  //       id,
  //     },
  //     data: {
  //       ...params_without_id,
  //     },
  //   });
  // }

  // async delete(id: string): Promise<Post> {
  //   return this.prisma.post.delete({
  //     where: {
  //       id,
  //     },
  //   });
  // }
}
