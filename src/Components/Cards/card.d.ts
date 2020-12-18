export interface IBasicCardTextConfig {
  children:
    | React.ReactChild
    | React.ReactChildren
    | React.ReactChild[]
    | React.ReactChildren[];
  ml?: string;
  mr?: string;
  amount?: number;
}

export interface IBasicCardTextStyleConfig {
  ml?: string;
  mr?: string;
  amount?: number;
}

export interface IBasicCardComponentConfig {
  children:
    | React.ReactChild
    | React.ReactChildren
    | React.ReactChild[]
    | React.ReactChildren[];
  amount?: number;
}

export interface IBasicCardComponentStyleConfig {
  amount?: number;
}

export interface IBasicCardSymbolConfig {
  children:
    | React.ReactChild
    | React.ReactChildren
    | React.ReactChild[]
    | React.ReactChildren[];
  amount?: number;
}

export interface IBasicCardSymbolStyleConfig {
  amount?: number;
}
