// Code your solution here
function findMatching(drivers, match){
    return drivers.filter((el) => el.toLowerCase() === match.toLowerCase());
}

function fuzzyMatch(drivers, match){
    return drivers.filter((el) => el.toLowerCase().startsWith(match.toLowerCase()));
}

function matchName(drivers, match){
    let driversMatching = drivers.filter((el) => el.name === match);
    return driversMatching;
}

/* const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];

  console.log(users.filter((el) => el.firstName === 'Niky')); */
