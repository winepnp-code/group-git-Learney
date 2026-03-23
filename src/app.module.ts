import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { UsersModule } from './users/users.module';
import { ChecklistsModule } from './checklists/checklists.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [UsersModule, ChecklistsModule, WorkspacesModule, CommentsModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
