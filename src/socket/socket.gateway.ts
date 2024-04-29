import {
  ConnectedSocket,
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Socket, Server } from "socket.io";

@WebSocketGateway()
export class SocketGateway implements OnGatewayInit {
  @WebSocketServer() server: Server;

  afterInit(server: Server) {
    console.log(server);
  }

  handleConnection(client: any, ...args: any[]) {
    console.log("Client connected:", client.id);
  }

  handleDisconnect(client: any) {
    console.log("Client disconnected:", client.id);
  }

  @SubscribeMessage("createRoom")
  createRoom(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    client.join(data);
    console.log(`created room: ${data}`);
  }

  @SubscribeMessage("joinRoom")
  joinRoom(@ConnectedSocket() socket: Socket, @MessageBody() roomId: string) {
    socket.join(roomId);
    console.log(`${socket.id} connected to ${roomId}`);
  }

  @SubscribeMessage("playVideo")
  startVideo(@ConnectedSocket() socket: Socket) {
    this.server.in(Array.from(socket.rooms)[1]).emit("playVideo", void 1);
  }

  @SubscribeMessage("pauseVideo")
  pauseVideo(@ConnectedSocket() socket: Socket) {
    console.log(Array.from(socket.rooms)[1])
    this.server.in(Array.from(socket.rooms)[1]).emit("pauseVideo", void 1);
  }

  // @SubscribeMessage('message')
  // handleMessage(client: any, payload: any): string {
  //   return 'Hello world!';
  // }
}
