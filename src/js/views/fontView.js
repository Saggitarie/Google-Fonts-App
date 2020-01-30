import { elements } from "./base";

export const renderFontCards = fontInfo => {
  const markup = `
    <article style="font-family: ${fontInfo.family}, sans-serif;" class="card">
        <div class="card__subset">
            <div class="card__subset--icons">
                <i class="material-icons">
                    add_circle_outline
                </i>
            </div>
            <p class="card__subset--font-name">${fontInfo.family}</p>
        </div>
        <p class="card__creator">Vernon Adams( 1 styles )</p>
        <p class="card__sample-text card__family--anton">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            at aut cum dicta dolorum facere ipsa iure minima molestiae
        </p>
    </article>
    `;

  elements.container.insertAdjacentHTML("beforeend", markup);
};
