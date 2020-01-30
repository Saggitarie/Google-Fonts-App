import { elements } from "./base";

const renderFontCard = fontInfo => {
  const markup = `
    <article class="card">
        <div class="card__subset">
            <div class="card__subset--icons">
                <i class="material-icons">
                    add_circle_outline
                </i>
            </div>
            <p class="card__subset--font-name">${fontInfo.family}</p>
        </div>
        <p class="card__creator">Vernon Adams( ${
          Object.keys(fontInfo.files).length
        } styles )</p>
        <p style="font-family: ${
          fontInfo.family
        }, sans-serif;"  class="card__sample-text card__family--anton">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            at aut cum dicta dolorum facere ipsa iure minima molestiae
        </p>
    </article>
    `;

  elements.container.insertAdjacentHTML("beforeend", markup);
};

let exceptionalFonts = [
  "Open+Sans+Condensed",
  "Sunflower",
  "Coda+Caption",
  "Buda",
  "Molle",
  "UnifrakturCook"
];

let link = elements.link;

const renderRelativeLinkTags = fontFamily => {
  if (exceptionalFonts.includes(fontFamily)) {
    renderExceptionalLinkTags(fontFamily);
  } else {
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css?family=${fontFamily.family}&display=swap`;

    elements.head.appendChild(link);
  }
};

const renderExceptionalLinkTags = fontFamily => {
  switch (fontFamily) {
    case exceptionalFonts[0]:
      link.rel = "stylesheet";
      //https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap
      link.href = `https://fonts.googleapis.com/css?family=${fontFamily.family}:300&display=swap`;
      elements.head.appendChild(link);

    case exceptionalFonts[1]:
      link.rel = "stylesheet";
      //<link href="https://fonts.googleapis.com/css?family=Sunflower:300&display=swap" rel="stylesheet">
      link.href = `https://fonts.googleapis.com/css?family=${fontFamily.family}:300&display=swap`;
      elements.head.appendChild(link);

    case exceptionalFonts[2]:
      link.rel = "stylesheet";
      //<link href="https://fonts.googleapis.com/css?family=Coda+Caption:800&display=swap" rel="stylesheet">
      link.href = `https://fonts.googleapis.com/css?family=${fontFamily.family}:800&display=swap`;
      elements.head.appendChild(link);

    case exceptionalFonts[3]:
      link.rel = "stylesheet";
      //<link href="https://fonts.googleapis.com/css?family=Buda:300&display=swap" rel="stylesheet">
      link.href = `https://fonts.googleapis.com/css?family=${fontFamily.family}:300&display=swap`;
      elements.head.appendChild(link);

    case exceptionalFonts[4]:
      link.rel = "stylesheet";
      //<link href="https://fonts.googleapis.com/css?family=Molle:400i&display=swap" rel="stylesheet">
      link.href = `https://fonts.googleapis.com/css?family=${fontFamily.family}:400&display=swap`;
      elements.head.appendChild(link);

    case exceptionalFonts[5]:
      link.rel = "stylesheet";
      //<link href="https://fonts.googleapis.com/css?family=UnifrakturCook:700&display=swap" rel="stylesheet">
      link.href = `https://fonts.googleapis.com/css?family=${fontFamily.family}:700&display=swap`;
      elements.head.appendChild(link);
  }
};

export const renderAllFontCards = fontListInfo => {
  renderFontCard(fontListInfo);
  renderRelativeLinkTags(fontListInfo);
};
