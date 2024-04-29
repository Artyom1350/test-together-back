import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { EventsGateway } from './events/events/events.gateway';
// import { EventsModule } from './events/events/events.module';
import { VideoModule } from './video/video.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [VideoModule, SocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
