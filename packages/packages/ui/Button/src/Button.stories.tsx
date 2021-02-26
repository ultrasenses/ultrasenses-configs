import React, { FC } from "react";
import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
};

const Row: FC<{}> = ({ children }) => (
  <div style={{ marginBottom: 20 }}>{children}</div>
);

export const main = () => (
  <>
    <Row>
      <Button variant="filled">Button (filled)</Button>
    </Row>
    <Row>
      <Button variant="outline">Button (outline)</Button>
    </Row>
    <Row>
      <Button variant="text">Button (text)</Button>
    </Row>
  </>
);

export const sizes = () => (
  <>
    <Row>
      <Button size="S">size=S</Button>
    </Row>
    <Row>
      <Button>size=default</Button>
    </Row>
    <Row>
      <Button size="M">size=M</Button>
    </Row>
    <Row>
      <Button size="L">size=L</Button>
    </Row>
  </>
);

export const variants = () => (
  <>
    <Row>
      <Button>variant=default</Button>
    </Row>
    <Row>
      <Button disabled>variant=default,disabled</Button>
    </Row>
    <Row>
      <Button variant="filled">variant=filled</Button>
    </Row>
    <Row>
      <Button variant="filled" disabled>
        variant=filled,disabled
      </Button>
    </Row>
    <Row>
      <Button variant="outline">variant=outline</Button>
    </Row>
    <Row>
      <Button variant="outline" disabled>
        variant=outline,disabled
      </Button>
    </Row>
    <Row>
      <Button variant="text">variant=text</Button>
    </Row>
    <Row>
      <Button variant="text" disabled>
        variant=text,disabled
      </Button>
    </Row>
  </>
);

export const variantsWidth = () => (
  <>
    <Row>
      <Button>variantWidth=default</Button>
    </Row>
    <Row>
      <Button>
        variantWidth=default (Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.)
      </Button>
    </Row>
    <Row>
      <Button widthVariant="fix">variantWidth=fix</Button>
    </Row>
    <Row>
      <Button widthVariant="fix">
        variantWidth=fix (Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.)
      </Button>
    </Row>
    <Row>
      <Button widthVariant="full">variantWidth=full</Button>
    </Row>
    <Row>
      <Button widthVariant="full">
        variantWidth=full (Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.)
      </Button>
    </Row>
  </>
);
