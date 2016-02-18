package com.insano10.angularplayground

object PersonData {

  val imgFolder = "resources/images"

  def getPeople: PeopleData = {

    val bobImage = new PersonImage(full = s"$imgFolder/grumpy_man.jpg", thumb = s"$imgFolder/grumpy_man_thumb.jpg")
    val bobDiary = List(
      new FoodDiaryEntry(name = "lemon", time = 10000, portionSize = "Small", comment = "**screws up face**", feeling = "sad"),
      new FoodDiaryEntry(name = "lemon", time = 20000, portionSize = "Small", comment = "**screws up face**", feeling = "sad"),
      new FoodDiaryEntry(name = "lemon", time = 30000, portionSize = "Small", comment = "**screws up face**", feeling = "sad"),
      new FoodDiaryEntry(name = "lemon", time = 40000, portionSize = "Medium", comment = "**throws lemon at person**", feeling = "excited")
    )
    val bob = new Person(name = "Mr Bob", age = 35, motto = "When the world gives you lemons, throw them at people", isHungry = false, img = bobImage, diary = bobDiary)

    val jonesImage = new PersonImage(full = s"$imgFolder/cat_lady.png", thumb = s"$imgFolder/cat_lady_thumb.png")
    val jonesDiary = List(
      new FoodDiaryEntry(name = "carrots and hummus", time = 10000, portionSize = "Small", comment = "Oh no thank you, Tiddles simply hates hummus", feeling = "sad"),
      new FoodDiaryEntry(name = "mackeral", time = 20000, portionSize = "Large", comment = "om nom nom", feeling = "happy")
    )
    val jones = new Person(name = "Mrs Jones", age = 57, motto = "You can never have enough cats", isHungry = true, img = jonesImage, diary = jonesDiary)

    val kittyImage = new PersonImage(full = s"$imgFolder/daria.jpg", thumb = s"$imgFolder/daria_thumb.jpg")
    val kittyDiary = List[FoodDiaryEntry]()
    val kitty = new Person(name = "Miss Kitty", age = 22, motto = "If you get in my way, I will destroy you", isHungry = false, img = kittyImage, diary = kittyDiary)

    new PeopleData(List(bob, jones, kitty))
  }
}
