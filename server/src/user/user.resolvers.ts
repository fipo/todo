import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from 'src/graphql.schema';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('User')
export class UserResolvers {
  constructor(private readonly userService: UserService) {}

  @Query('users')
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query('user')
  async user(@Args('id') args: string): Promise<User> {
    return this.userService.findOne(args);
  }

  // @Mutation('createPost')
  // async create(@Args('input') args: NewPost): Promise<Post> {
  //   const createdPost = await this.postService.create(args);
  //   pubSub.publish('postCreated', { postCreated: createdPost });
  //   return createdPost;
  // }

  // @Mutation('updatePost')
  // async update(@Args('input') args: UpdatePost): Promise<Post> {
  //   return this.postService.update(args);
  // }

  // @Mutation('deletePost')
  // async delete(@Args('id') args: string): Promise<Post> {
  //   return this.postService.delete(args);
  // }

  // @Subscription('postCreated')
  // postCreated() {
  //   return pubSub.asyncIterator('postCreated');
  // }
}
