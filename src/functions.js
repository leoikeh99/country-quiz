const selectRand = (arr) => {
  const random = Math.floor(Math.random() * arr.length);

  return arr[random];
};

function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

const getQuestions = async () => {
  const questions = [];
  await fetch("https://restcountries.eu/rest/v2/all").then(async (res) => {
    const data = await res.json();

    const types = ["flag", "capital"];

    for (let i = 0; i <= 9; i++) {
      if (selectRand(types) === "flag") {
        var data2 = data;
        const country = selectRand(data2);
        data2.filter((val) => country.name !== val.name);
        const options = [country.name];
        for (let i = 0; i <= 2; i++) {
          options.push(selectRand(data2).name);
        }

        const result = {
          question: "Which country does this flag belong to?",
          type: "flag",
          answer: country.name,
          options: shuffle(options),
          image: country.flag,
        };

        questions.push(result);
      } else {
        var data3 = data;
        data3.filter((val) => val.capital !== "");
        const country = selectRand(data3);
        data3.filter((val) => country.name !== val.name);
        const options = [country.name];
        for (let i = 0; i <= 2; i++) {
          options.push(selectRand(data3).name);
        }

        const result = {
          question: `${country.capital} is the capital of`,
          type: "capital",
          answer: country.name,
          options: shuffle(options),
        };

        questions.push(result);
      }
    }
  });

  return questions;
};

const cleanString = (string) => {
  return string.replaceAll(" ", "").replace(/\W/g, "");
};

export { getQuestions, shuffle, selectRand, cleanString };
