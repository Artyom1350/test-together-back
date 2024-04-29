import { Body, Controller, Post } from "@nestjs/common";
import { SocketGateway } from "src/socket/socket.gateway";

@Controller("video")
export class VideoController {
  constructor(private readonly _socket: SocketGateway) {}

  @Post("start")
  startVideo(@Body() data: any) {
    // this._socket.emit("video:start", data);
  }

  @Post("pause")
  pauseVideo(@Body() data: any) {
    // this._socket.emit("video:pause", data);
  }

  @Post("seek")
  seekVideo(@Body() data: any) {
    // this._socket.emit("video:seek", data);
  }
}
