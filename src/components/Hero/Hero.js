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
        Hello there <br />
        Happy to see you here
      </SectionTitle>
      <SectionText>
        This portfolio website showcases my laravel projects that were built
        using the TALL stack.
      </SectionText>
      <Button onClick={() => (window.location = "https://tallstack.dev/")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
