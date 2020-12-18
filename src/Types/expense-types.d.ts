export interface IChildNodes {
  children:
    | React.ReactChild
    | React.ReactChildren
    | React.ReactChild[]
    | React.ReactChildren[];
}

export interface IChildElementNodes {
  children:
    | React.ReactChild
    | React.ReactChildren
    | React.ReactChild[]
    | React.ReactChildren[]
    | React.ReactElement
    | React.ReactElement[]
    | React.JSXElementConstructor;
}
