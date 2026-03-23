import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { UsersModule } from './users/users.module';
import { ChecklistsModule } from './checklists/checklists.module';
import { CommentsModule } from './comments/comments.module';
import { LabModule } from './lab/lab.module';

@Module({
  imports: [
    UsersModule,
    ChecklistsModule,
    WorkspacesModule,
    CommentsModule,
    LabModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
