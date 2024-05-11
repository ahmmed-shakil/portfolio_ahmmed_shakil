import React from "react";
import { Layout } from "../../../shared/Layout/Layout";
import BlogLayout from "../../BlogLayout";
import BlogTitle from "../../components/BlogTitle";
import image from "../../../../images/Projects/carehub.png";
import BlogImage from "../../components/BlogImage";
import BlogText from "../../components/BlogText";
import BlogSubtitle from "../../components/BlogSubtitle";
import BlogPoints from "../../components/BlogPoints";
import BlogPointHeading from "../../components/BlogPointHeading";
import CodeEditor from "../../components/CodeEditor";
import Typography from "../../../shared/Typography/Typography";

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
      <BlogSubtitle text={"Benefits of TypeScript"} />
      <BlogPoints
        heading={"1. Early Error Detection"}
        content={
          "TypeScript helps identify type-related issues during development, reducing the chance of runtime bugs."
        }
      />
      <BlogPoints
        heading={"2. Code Readability"}
        content={
          "Clearly defined types make your code easier to understand for you and your team."
        }
      />
      <BlogPoints
        heading={"3. Enhanced Tooling"}
        content={
          "IDEs provide better code completion, navigation, and refactoring support when working with TypeScript."
        }
      />
      <BlogPoints
        heading={"4. Refactoring Support"}
        content={
          "Code can be safely refactored without worrying about accidental type-related errors."
        }
      />
      <BlogSubtitle text={"TypeScript Definitions and Types"} />
      <BlogText
        text={
          "TypeScript offers a variety of types to describe your code. Let's look at the most common types and how to use them."
        }
      />
      <BlogPointHeading text={"1. Primitive Types"} />
      <BlogText
        text={
          "TypeScript supports basic data types such as `number`, `string`, `boolean`, `null`, and `undefined`. Here’s how you can use them:"
        }
      />
      <CodeEditor title={"Primitive Types"}>
        <code>
          <Typography className=" text-md mb-2">
            <i>let</i> age: <span className=" text-third">number</span> = 80;
          </Typography>
          <Typography className=" text-md mb-2">
            <i>let</i> name: <span className=" text-third">string</span> =
            "John";
          </Typography>
          <Typography className=" text-md mb-2">
            <i>let</i> isStudent: <span className=" text-third">boolean</span> =
            true;
          </Typography>
          <Typography className=" text-md mb-2">
            <i>let</i> middleName:{" "}
            <span className=" text-third">string | null</span> = null;
          </Typography>
          <Typography className=" text-md mb-2">
            <i>let</i> notDefined:{" "}
            <span className=" text-third">string | undefined</span> = undefined;
          </Typography>
        </code>
      </CodeEditor>
      <BlogText
        text={
          "In this example, `age` is a number, `name` is a string, `isStudent` is a boolean, `middleName` can be a string or `null`, and `notDefined` is explicitly `undefined`."
        }
      />
      <BlogPointHeading text={"2. Array Types"} />
      <BlogText
        text={
          "Arrays hold collections of elements. In TypeScript, you specify the type of array elements using square brackets `[]` or the `Array<T>` syntax:"
        }
      />
      <CodeEditor title={"Primitive Types"}>
        <code>
          <Typography className=" text-md mb-2">
            <i>let</i> scores: <span className=" text-third">number[]</span> =
            [85, 90, 78];
          </Typography>
          <Typography className=" text-md mb-2">
            <i>let</i> name:{" "}
            <span className=" text-third">{`Array<string>`}</span> = ["Alice",
            "Bob", "Charlie"];
          </Typography>
        </code>
      </CodeEditor>
      <BlogText
        text={
          "In the above code, `scores` is an array of numbers, and `names` is an array of strings."
        }
      />
      <BlogPointHeading text={"3. Tuple Types"} />
      <BlogText
        text={
          "A tuple is a fixed-size array where each element has a specific type. This is useful when you want to group related data with known types:"
        }
      />
      <CodeEditor title={"Primitive Types"}>
        <code>
          <Typography className=" text-md mb-2">
            <i>let</i> student:{" "}
            <span className=" text-third">[string, number]</span> = ["John",
            25];
          </Typography>
        </code>
      </CodeEditor>
      <BlogText
        text={
          "Here, `student` is a tuple consisting of a `string` and a `number`."
        }
      />
      <BlogPointHeading text={"4. Object Types"} />
      <BlogText
        text={
          "You can define the shape of an object by specifying the types of its properties:"
        }
      />
      <CodeEditor title={"Primitive Types"}>
        <code>
          <Typography className=" text-md mb-2">
            <i>type</i> <span className=" text-third">Student</span> ={" "}
            <span className=" text-third">{`{`}</span>
          </Typography>
          <Typography className=" text-md mb-2 pl-4">
            name: <span className=" text-third">string</span>;
          </Typography>
          <Typography className=" text-md mb-2 pl-4">
            age: <span className=" text-third">number</span>;
          </Typography>
          <Typography className=" text-md mb-2 pl-4">
            isEnrolled: <span className=" text-third">boolean</span>;
          </Typography>
          <Typography className=" text-md mb-2">
            <span className=" text-third">{`}`}</span>;
          </Typography>
        </code>
        <code className=" mt-3">
          <Typography className=" text-md mb-2">
            <i className="mr-1">let</i>student:{" "}
            <span className=" text-third">Student</span> ={" "}
            <span className=" text-third">{`{`}</span>
          </Typography>
          <Typography className=" text-md mb-2 pl-4">
            name: <span className=" text-third"> "Alice"</span>;
          </Typography>
          <Typography className=" text-md mb-2 pl-4">
            age: <span className=" text-third">21</span>;
          </Typography>
          <Typography className=" text-md mb-2 pl-4">
            isEnrolled: <span className=" text-third">true</span>;
          </Typography>
          <Typography className=" text-md mb-2">
            <span className=" text-third">{`}`}</span>;
          </Typography>
        </code>
      </CodeEditor>
      <BlogText
        text={
          "In this example, `Student` is an object type that specifies the types for the properties `name`, `age`, and `isEnrolled`."
        }
      />
      <BlogPointHeading text={"5. Function Types"} />
      <BlogText
        text={
          "You can specify the types of function parameters and return values:"
        }
      />
      <CodeEditor title={"Primitive Types"}>
        <code>
          <Typography className=" text-md mb-2">
            <i>function</i> <span className=" text-third">greet</span>(name:{" "}
            <span className=" text-third">string</span>)
            <span className=" text-third">{`{`}</span>
          </Typography>
          <Typography className=" text-md mb-2 pl-4">
            <span className=" text-pink-500 italic">return</span>{" "}
            <span>
              `Hello{" "}
              <span className=" text-third">
                {`$`}
                {`{`}
                {`string`}
                {`}`}
              </span>
              `
            </span>
            ;
          </Typography>
          <Typography className=" text-md mb-2">
            <span className=" text-third">{`}`}</span>;
          </Typography>
        </code>
        <code className=" mt-3">
          <Typography className=" text-md mb-2">
            <i>let</i> greeting: <span className=" text-third">string</span> ={" "}
            <span className=" text-third">{`greet(`}</span>"John"
            <span className=" text-third">{`)`}</span>
          </Typography>
        </code>
      </CodeEditor>
    </div>
  );
  const sideBar = <div>sidebar</div>;
  return <BlogLayout children1={mainSection} children2={sideBar} />;
};

export default Types;
