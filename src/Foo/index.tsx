import React, { type FC } from 'react';

const Foo: FC<{ title: string }> = (props) => <h1>{props.title}</h1>;

export default Foo;
