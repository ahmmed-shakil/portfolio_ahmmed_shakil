import React from "react";
import { Layout } from "../../../shared/Layout/Layout";
import BlogLayout from "../../BlogLayout";
import BlogTitle from "../../components/BlogTitle";
import image from "../../../../images/Projects/carehub.png";
import BlogImage from "../../components/BlogImage";
import BlogText from "../../components/BlogText";
import BlogSubtitle from "../../components/BlogSubtitle";

const Types = () => {
  const mainSection = (
    <div>
      <BlogTitle text={"Understanding TypeScript Definitions and Types"} />
      <BlogImage image={image} />
      <BlogText
        text={
          "When developing web applications, you want your code to be robust, clear, and efficient. One way to achieve this is by using TypeScript, a popular programming language that extends JavaScript with optional static typing and other powerful features. In this blog, we'll explore TypeScript definitions and types, focusing on how they help you catch errors early and write cleaner, more reliable code."
        }
      />
      <BlogSubtitle text={"What is TypeScript?"} />
      <BlogText
        text={
          "TypeScript is a superset of JavaScript that includes all JavaScript features while introducing optional static typing, interfaces, classes, and more. This language provides a way to define the expected types of variables, function parameters, and return values, which helps you catch errors at compile time."
        }
      />
    </div>
  );
  const sideBar = <div>sidebar</div>;
  return <BlogLayout children1={mainSection} children2={sideBar} />;
};

export default Types;
