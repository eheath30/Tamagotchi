class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.happiness = 50;
    this.hunger = 10;
    this.hydration = 10;
    this.age = 0;
  }

  ageOneDay() {
    this.age++;
    decreaseHappiness()
  }

  feed() {
    decreaseHunger()
  }

  play() {
    increaseHappiness()
  }

  drink() {
this.decreaseHydration
  }

  increaseHappiness() {
    this.happiness++;
  }

  decreaseHappiness() {
    this.happiness--;
  }

  increaseHunger() {
    this.hunger++;
  }

  decreaseHunger() {
    this.hunger--;
  }

  increaseHydration() {
    this.hydration++;
  }

  decreaseHydration() {
    this.hydration--;
  }

  updateStats() {
    console.log(
      "Name:",
      this.name | "Happiness:",
      this.happiness | "Hunger:",
      this.hunger | "Hydration:",
      this.hydration | "Age:",
      this.age
    );
  }
}
