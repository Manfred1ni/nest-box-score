import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsController } from './teams.controller';

@Module({
  imports: [],
  controllers: [AppController, TeamsController],
  providers: [AppService],
})
export class AppModule {}
