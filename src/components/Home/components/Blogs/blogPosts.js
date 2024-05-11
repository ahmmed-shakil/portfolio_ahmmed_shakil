import typescriptImfg from "../../../../images/Blogs/types_in_ts.png";
import asyncImage from "../../../../images/Blogs/async-await-ts.png";
import asyncjsImg from "../../../../images/Blogs/promise.jpg";

export const blogList = [
  {
    title: "Understanding TypeScript Definitions and Types",
    desc: "When developing web applications, you want your code to be robust, clear, and efficient. One way to achieve this is by using TypeScript, a popular programming language that extends JavaScript with optional static typing and other powerful features. In this blog, we'll explore TypeScript definitions and types, focusing on how they help you catch errors early and write cleaner, more reliable code.",
    slug: "understanding_typescript_definitions_and_types",
    image: typescriptImfg,
  },
  {
    title: "Asynchronous Operations in TypeScript with Async/Await",
    desc: "Asynchronous programming in TypeScript has evolved significantly over the years, moving from callback hell to Promises, and finally to the elegant Async/Await syntax. In this blog post, we'll explore how Async/Await simplifies handling asynchronous operations compared to traditional callback functions and Promises in TypeScript.",
    slug: "async_await_in_typescript",
    image: asyncImage,
  },
  {
    title: "Asynchronous JavaScript: Promise vs. Async/Await",
    desc: "In the realm of JavaScript asynchronous programming, two prominent features have revolutionized the way developers handle asynchronous tasks: Promises and Async/Await. In this blog post, we'll delve into the characteristics of each approach, compare their syntax and usage, and discuss when to choose one over the other.",
    image: asyncjsImg,
    slug: "promise_vs_async_await",
  },
];
