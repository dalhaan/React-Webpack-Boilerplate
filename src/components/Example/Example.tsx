import * as React from 'react';

export interface ExampleProps {
  propOne: string,
  propTwo: string
};

export const Example = (props: ExampleProps) => <h1>Prop one: {props.propOne}, Prop two: {props.propTwo}</h1>
