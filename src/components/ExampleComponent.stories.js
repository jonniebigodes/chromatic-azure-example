import React from "react";
import { ExampleComponent } from "./ExampleComponent";

const Template = (args) => <ExampleComponent {...args} />;
export const Starter = Template.bind({});
Starter.args = {
  articleName: "Example Article",
  author: "John Doe",
  sinopsis: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor, dui vel posuere tempor, lectus diam imperdiet ligula, nec finibus justo mi ultricies ipsum. Praesent eget dui est. Aenean ut vehicula purus, ut pulvinar ipsum. Nulla eros purus, egestas a gravida quis, blandit ac nisl. Mauris nec bibendum purus. Aenean cursus cursus nunc eget tempus. Nullam non urna ac urna ultrices dignissim in vel turpis.
    `,
};
