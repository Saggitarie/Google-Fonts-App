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

const renderRelativeLinkTags = fontFamily => {
  // let linktag = `"https://fonts.googleapis.com/css?family=${fontFamily}&display=swap"" rel="stylesheet">`;

  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css?family=${fontFamily.family}&display=swap`;
  // link.type = "text/html";

  elements.head.appendChild(link);
  // elements.head.insertAdjacentElement("beforeend", linktag);
};

export const renderAllFontCards = fontListInfo => {
  renderFontCard(fontListInfo);
  renderRelativeLinkTags(fontListInfo);
};
