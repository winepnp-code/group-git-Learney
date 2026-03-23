import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ChecklistsModule } from './checklists/checklists.module';

@Module({
  imports: [UsersModule, ChecklistsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
