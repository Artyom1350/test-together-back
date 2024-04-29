import { Module } from "@nestjs/common";
import { VideoController } from "./video.controller";
import { SocketModule } from "src/socket/socket.module";

@Module({
  controllers: [VideoController],
  imports: [SocketModule]
})
export class VideoModule {}
