import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <header className="homeOne">
        <h1>
          Etiam pellentesque tortor eu erat iaculis, a efficitur odio pretium.
          Nunc sed justo lacus. Nam a faucibus tortor, quis venenatis ligula.
          Curabitur fermentum ac dolor vel rhoncus. Pellentesque pretium neque
          felis, in tempus lectus pellentesque eget. Vivamus a lobortis metus.
          Donec vehicula lacinia turpis, quis tristique eros condimentum
          sodales.
        </h1>
      </header>
      <section>
        <section className="homeTwo">
          <div>Downloadable pdfs</div>
        </section>
        <section className="homeThree">Events</section>
      </section>
    </div>
  );
}
