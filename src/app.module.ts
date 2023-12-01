import { Module } from '@nestjs/common';
import { GithubModule } from './github/github.module';
import { GithubController } from './github/github.controller';

@Module({
  imports: [GithubModule],
  controllers: [GithubController],
  providers: [],
})
export class AppModule {}
