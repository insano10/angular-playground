package com.insano10.angularplayground

import spray.json.DefaultJsonProtocol


object MyJsonProtocol extends DefaultJsonProtocol {

  //Note the order in which these are declared is important
  implicit val foodDiaryFormat = jsonFormat5(FoodDiaryEntry)
  implicit val personImageFormat = jsonFormat2(PersonImage)
  implicit val personFormat = jsonFormat7(Person)
}

case class PersonImage(full: String, thumb: String)

case class FoodDiaryEntry(name: String, time: Long, portionSize: String, comment: String, feeling: String)

case class Person(id: Long, name: String, age: Int, motto: String, isHungry: Boolean, img: PersonImage, diary: List[FoodDiaryEntry])
