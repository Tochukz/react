import React from 'react';

type PropsType = {
  children: any;
}
function Base ({ children }: PropsType) {
  return (
    <div>
     { children }
    </div>
  );
}

Base.defaultProps = {
  children: {},
}

export default Base;