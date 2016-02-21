package com.insano10.angularplayground

import akka.actor.Actor
import spray.json.DefaultJsonProtocol
import spray.routing._
import spray.http._
import MediaTypes._
import spray.httpx.SprayJsonSupport._
import MyJsonProtocol._

class ApiRouteActor extends Actor with SimpleApiRoutes {

  def actorRefFactory = context

  def receive = runRoute(apiRoutes)
}

trait SimpleApiRoutes extends HttpService {

  val apiRoutes =
    pathPrefix("api") {
      path("person") {
        get {

          //Note: allow CORS as backend runs on 8080 and frontend on whatever intellij wants
          respondWithHeaders(
            HttpHeaders.`Access-Control-Allow-Origin`(AllOrigins)) {
            complete {
              PersonData.getPeople
              /*
              Note: there is an open issue with Intellij for the incorrect error being flagged here about the type
              not conforming to ToResponseMarshallable.
              This has something to do with detecting the types of nested implicits
               */
            }
          }
        }
      } ~ // tilde composes routes and requests are matches against each in turn
      // read out path params with spray matchers. Here we are extracting 1 param of type long
      path("person" / LongNumber) { id =>
        respondWithHeaders(
          HttpHeaders.`Access-Control-Allow-Origin`(AllOrigins)) {
          complete {
            PersonData.getPerson(id)
          }
        }
      }
    }
}