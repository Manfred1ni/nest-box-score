import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [TeamsModule]
})
export class AppModule {}
