import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, Janroe Cordero here<br />
        <br />
        Let's build something beautiful
      </SectionTitle>
      <SectionText>
        This portfolio website showcases my SaaS projects that were built
        using the Tailwind, Alpine.js, Laravel, Livewire (TALL) stack.
      </SectionText>
      <Button onClick={() => (window.location = "#projects")}>
        See Projects
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
