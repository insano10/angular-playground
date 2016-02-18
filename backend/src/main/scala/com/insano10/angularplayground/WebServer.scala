package com.insano10.angularplayground

import akka.actor.{Props, ActorSystem}
import akka.io.IO
import akka.pattern.ask
import akka.util.Timeout
import scala.concurrent.duration._
import spray.can.Http

object WebServer extends App {

  implicit val system = ActorSystem("apiEndpoints")
  val service = system.actorOf(Props[ApiRouteActor], "api-endpoints-actor")

  implicit val timeout = Timeout(5.seconds)
  IO(Http) ? Http.Bind(service, interface = "localhost", port = 8080)
}
