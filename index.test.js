const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  it("[1] returns an object with the properties trimmed", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  it("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  it("[3] returns an object with the properties trimmed", () => {
    // const input =
  });
  it("[4] the object returned is the exact same one we passed in", () => {
    test.todo("asdf");
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  it("[5] returns the largest number in an array of numbers", () => {
    const input = [5, 6, 57, 8, 9];
    const expected = 57;
    const actual = utils.findLargestInteger(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  it("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    const actual = counter.countDown();
    expect(actual).toBe(3);
  });
  it("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    const secondCall = counter.countDown();
    expect(secondCall).toBe(2);
  });
  it("[8] the count eventually reaches zero but does not go below zero", () => {
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    const sixthcall = counter.countDown();
    expect(sixthcall).toBe(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons("spring"); // each test must start with fresh seasons
  });
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    const next = seasons.next();
    expect(next).toEqual("summer");
  });
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    const next = seasons.next();
    expect(next).toEqual("fall");
  });
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next();
    seasons.next();
    const next = seasons.next();
    expect(next).toEqual("winter");
  });
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    const next = seasons.next();
    expect(next).toEqual("spring");
  });
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    const next = seasons.next();
    expect(next).toEqual("summer");
  });
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    let test = ''

    function call(arg) {
      for (let i = arg; i < arg - 3; i++) {
        test = seasons.next();
      }
    }
    console.log(call(40))
    // expect(test).toEqual("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  it("[15] driving the car returns the updated odometer", () => {
    test.todo("asdf");
  });
  it("[16] driving the car uses gas", () => {
    test.todo("asdf");
  });
  it("[17] refueling allows to keep driving", () => {
    test.todo("asdf");
  });
  it("[18] adding fuel to a full tank has no effect", () => {
    test.todo("asdf");
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  it("[19] resolves true if passed an even number", () => {
    test.todo("asdf");
  });
  it("[20] resolves false if passed an odd number", () => {
    test.todo("asdf");
  });
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    test.todo("asdf");
  });
  it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    test.todo("asdf");
  });
});
