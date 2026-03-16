import React from "react";
import { Still } from "remotion";
import { postData } from "../data/post";
import { resolveSlideComponent } from "./resolveSlide";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {postData.slides.map((slide: any, index: number) => {
        const Component = resolveSlideComponent(slide);
        const slideData = { ...slide, theme: slide.theme || postData.theme };

        return (
          <Still
            key={index}
            id={`Slide-${index + 1}`}
            component={Component}
            defaultProps={{ data: slideData }}
            width={1080}
            height={1440}
          />
        );
      })}
    </>
  );
};
