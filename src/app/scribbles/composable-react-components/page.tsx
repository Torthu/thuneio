import {
  A,
  Article,
  CodeBlock,
  H1,
  H3,
  P,
  Section,
  SectionHeader,
} from "@/components";

const codeExample = `const scream = str => str.toUpperCase();
const exclaim = str => \`\${str}!\`;
const echo = str => \`\${str} \${str}\`;`;

const codeExample2 = `const shout = str => exclaim(scream(echo(str)));`;

const codeExample3 = `const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);`;

const jsxCompileExample = `// This component definition:
const Element = () => <h1 className="greeting">Hello, world!</h1>;

// Compiles to:
const Element = () => React.createElement("h1", { className: "greeting" }, "Hello, world!");
`;

const dynamicFunctionCall = `const Component = ({ as="div", ...rest}) => {
    const ComponentToRender = as;
    return <ComponentToRender {...rest} />;
};`;

const slotExample = `const Button = ({ buttonLabel, ...rest }) => <button {...rest}>{buttonLabel}</button>;`;

const componentReusabilityAdAbsurdum = `// Note: by passing rest directly we already placed the slot
<Component as="button" onClick={console.log}>
    <Component as="div" className="flex gap-2">
        <Component as="img" src="icon.png" />
        <Component as="span">Label</Component>
    </Component>
</Component>`;

const composingStylesExample = `import { twMerge } from "tailwind-merge";

/**
 * We define a BaseComponent that all our components will use (eventually)
 * This component takes an "as" prop to make the underlying element dynamic,
 * a className prop for styling and splats the rest of the props.
 * It also merges the className using tailwind-merge to allow for
 * composable styling.
 */
const BaseComponent = ({ as="div", className="", ...rest}) => {
    const Element = as;
    const mergedClassName = twMerge(className);
    return <Element className={mergedClassName} {...rest} />;
};

/**
 * We define a Button component that uses the BaseComponent.
 * It adds some default styling, but concatenates any className passed in.
 */
const Button = ({ className="", as="button", ...rest}) => {
    return <BaseComponent as={as} className={"bg-blue-500 text-white p-4 " + className)} {...rest} />;
};

/**
 * We can now use the Button component and override the styling.
 * twMerge will ensure that the final className string is valid Tailwind CSS.
 */
const App = () => {
    return <Button className="bg-red-500">Click me</Button>; // The button will have a red background
};
`;

const popupExample = `import { BaseComponent, BaseComponentProps } from "./BaseComponent";


/**
 * We define a Popup component that is composed of
 * four atoms: PopupShell, PopupHeader, PopupBody and PopupFooter.
 * Each atom uses the BaseComponent to allow for
 * dynamic element type, styling and props.
 * 
 * The Popup component - a molecule - takes props for each atom,
 * and splats any additional props to the PopupShell.
 * It also places children in the PopupBody.
 */
interface PopupShellProps extends BaseComponentProps {}
export const PopupShell = ({as="dialog", ...rest}) => {};

interface PopupHeaderProps extends BaseComponentProps {}
export const PopupHeader = ({as="h1", ...rest}) => {};

interface PopupBodyProps extends BaseComponentProps {}
export const PopupBody = ({as="section", ...rest}) => {};

interface PopupFooterProps extends BaseComponentProps {}
export const PopupFooter = ({as="footer", ...rest}) => };

interface PopupProps extends PopupShellProps {
    header: PopupHeaderProps;
    body: PopupBodyProps;
    footer: PopupFooterProps;
}

export const Popup = ({ header, body, footer, children, ...rest }: PopupProps) => {
    return (
        <PopupShell {...rest}>
            <PopupHeader {...header} />
            <PopupBody {...body}>{children}</PopupBody>
            <PopupFooter {...footer} />
        </PopupShell>
    );
}

`;

export default function Page() {
  return (
    <Article>
      <H1>Composable React Components</H1>
      This blog post will explore composition in React components and propose a
      few patterns to achieve it.
      <Section>
        <SectionHeader>Introduction: what is composition?</SectionHeader>
        <P>
          Functional composition is the act of taking the output of one function
          and passing it directly as the input to another function.
        </P>
        <P>For example, consider the following three functions:</P>
        <CodeBlock code={codeExample} language="javascript" />
        <P>
          They have the same function signature: string {"=>"} string. This
          means that they are composable:
        </P>
        <CodeBlock code={codeExample2} language="javascript" />
        <P>We can write a quick utility function:</P>
        <CodeBlock code={codeExample3} language="javascript" />
        <P>And now we can compose our three functions into one:</P>
        <CodeBlock
          code={`const shout = compose(exclaim, scream, echo);`}
          language="javascript"
        />
      </Section>
      <Section>
        <SectionHeader>Composition in React</SectionHeader>
        <P>
          React components are (for the most part) functions. Likewise, JSX is
          simply a way of writing function-calls with XML-syntax.
        </P>
        <CodeBlock code={jsxCompileExample} language="javascript" />
        <P>
          There are three parts to a JSX function call: the component to use
          (i.e function to call), the props, and children.
        </P>

        <P>We can make all three dynamic!</P>

        <H3>Dynamic function call</H3>
        <P>
          Firstly we will look at the function call. Making this dynamic lets us
          decouple our compoment structure from the underlying HTML or SVG
          structure, which in turn gives us a lot of flexibility.
        </P>
        <CodeBlock code={dynamicFunctionCall} language="javascript" />
        <P>
          This lets us do a couple of things: change behaviour by for instance
          doing things like rendering a button as an anchor tag and think about
          semantic html by for instance rendering a Card component as a section.
        </P>
        <H3>Dynamic props: the magic ...rest &quot;splat&quot;</H3>
        <P>Making the props dynamic is easier, we simply splat and pass on.</P>
        <CodeBlock code={dynamicFunctionCall} language="javascript" />
        <P>
          This might seem like a strange thing to do. Why would we pass on
          arbitrary props?
        </P>
        <P>
          The reason is simple, in the code example above we render a div, do
          you know all the attributes a div can take? I don&apos;t.
        </P>
        <P>
          By splatting and passing on the props we can pass on any attribute
          that the underlying element. This lets us do a11y-tweaks like setting
          aria-label, it lets us style things and more.
        </P>
        <P>It also combines nicely with the dynamic function call we added:</P>
        <CodeBlock
          code={`<Component as="button" onClick={console.log}} />`}
          language="javascript"
        />
        <H3>Children</H3>
        <P>In Vue.js and Angular we have slots, in React we have children.</P>
        <P>
          Children are simply nested function calls, strings or null. The rule
          here is to &quot;always place the slot&quot;, meaning that you should
          always strive to pass children on to the underlying component layer.
        </P>
        <P>Consider the following component:</P>
        <CodeBlock code={slotExample} language="javascript" />
        <P>
          This component is largely reusable. It lets you do typical
          button-stuff like event-handlers, styling and even
          accessibility-tweaks.
        </P>
        <P>
          However, it has one major drawback: if we want to add an icon to the
          button, we need to write a new component.
        </P>
        <P>
          Luckily, we already have a reusable, dynamic, composable Component
          available:
        </P>
        <CodeBlock
          code={componentReusabilityAdAbsurdum}
          language={`javascript`}
        />
        <P>
          It is absurd to use one component like this, but I hope it illustrates
          the point that we can use the Component as a base for all our
          components.
        </P>
      </Section>
      <Section>
        <SectionHeader>Composable styling with Tailwind</SectionHeader>
        <P>The concept of composition can extend to styling as well.</P>
        <P>
          Essentially we want to concatinate class names in each nested function
          call, and then dedupe them at the end.
        </P>
        <P>
          The simplest way of doing this is with{" "}
          <A href="https://tailwindcss.com">Tailwind CSS</A> and{" "}
          <A href="https://github.com/dcastil/tailwind-merge">tailwind-merge</A>
        </P>
        <CodeBlock code={composingStylesExample} language="javascript" />
        <P>
          This lets us create reusable components with composable styling, with
          the passed className (as long as it is added to the end) being more
          significant the further out in the React component hierarchy that it
          is passed.
        </P>
      </Section>
      <Section>
        <SectionHeader>Atomic design: the reusability pyramid</SectionHeader>
        <P>
          <A href="https://bradfrost.com/blog/post/atomic-web-design/">
            Atomic design
          </A>{" "}
          is a methodology for creating component systems. It breaks components
          down into five groups: atoms, molecules, organisms, templates and
          pages. For the purpose of this article we will ignore pages.
        </P>
        <P>
          This is highly applicable to how we want to structure our components.
        </P>

        <H3>Atoms</H3>
        <P>
          Everything we showed in the previous section is an atom, with the
          BaseComponent being the basic building block of your React component
          system.
        </P>
        <P>
          Atoms are very easy to re-use, they are easy to compose, and they are
          easy to make.
        </P>
        <P>
          They are however dumb. Logic should be kept to a minimum, and event
          handling should happen in other layers of the pyramid.
        </P>

        <H3>Molecules</H3>
        <P>
          Molecules are atom(s) put into system. Molecules have stricter API
          contracts than atoms, and are not as re-usable as their atom
          counterparts.
        </P>

        <CodeBlock code={popupExample} language="typescript" />

        <P>How is the example above re-usable?</P>
        <P>
          The Popup is created using multiple building blocks. It also uses
          interfaces in order to allow you to customize each atom within the
          Popup molecule.
        </P>
        <P>
          Additionally, it serves as a living example of how to build a new
          Popup component if it fails to serve your concrete need.
        </P>

        <H3>Organisms</H3>
        <P>
          Organisms are molecules (and atoms) put into system, they take high
          level state and are responsible for event handling.
        </P>
        <P>They are the place you should want to do most of your logic.</P>
        <P>An organism could be a login form.</P>

        <H3>Templates</H3>
        <P>
          Templates are organisms (and molecules and atoms) put into system.
        </P>
        <P>
          They are responsible for data fetching, context providers, and other
          things required to turn your stack of components into an application.
        </P>
        <P>
          This is where you would set up things such as ReactRouter, a Redux
          store, ReactQuery or similar.
        </P>
        <P>
          This is also where you would do things such as checking if a user is
          logged in displaying a LoginForm organism if not or displaying a
          Dashboard organism if they are.
        </P>
      </Section>
      <Section>
        <SectionHeader>Conclusion</SectionHeader>
        <P>
          In this article we have looked at some tricks that makes composing
          React components joyful.
        </P>
        <P>
          We have talked about how to make a base component that takes in as=""
          (which component to render as), className="" (a composable class list
          that is merged), children and ...rest and passes them on to react-dom.
        </P>
        <P>
          We have also talked about the Atomic Design pattern and how to use it
          to make your components more reusable.
        </P>
      </Section>
    </Article>
  );
}
