import React from "react";
import { Still } from "remotion";
import { postData } from "../data/post";
import { resolveSlideComponent } from "./resolveSlide";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {postData.slides.map((slide: any, index: number) => {
        const Component = resolveSlideComponent(slide);

        return (
          <Still
            key={index}
            id={`Slide-${index + 1}`}
            component={Component}
            defaultProps={{ data: slide }}
            width={1080}
            height={1440}
          />
        );
      })}
    </>
  );
};
