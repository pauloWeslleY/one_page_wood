const cards = [
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageURL: "./../assets/track.svg",
  },
  {
    title: "Card 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageURL: "./../assets/gear_icon.svg",
  },
  {
    title: "Card 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageURL: "./../assets/users_icon.svg",
  },
];

for (let i = 0; i < cards.length; i++) {
  let card = cards[i];

  let cardHTML = `
    <article class="card">
        <div class="card__title">
          <h2>${card.title}</h2>
        </div>
        <div class="card__icon">
          <img src="${card.imageURL}" alt="Icon" />
        </div>
        <div class="card__body">
          <p>
              ${card.description}
          </p>
        </div>
    </article>
   `;

  document.querySelector(".card__container").innerHTML += cardHTML;
}
