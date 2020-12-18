export interface IButtonBaseConfig {
  children:
    | React.ReactChild
    | React.ReactChildren
    | React.ReactChild[]
    | React.ReactChildren[];
  mlnormal?: string;
  mrnormal?: string;
  mlsmall?: string;
  mrsmall?: string;
  mtsmall?: string;
}

export interface IButtonBaseStyleConfig {
  mlnormal?: string;
  mrnormal?: string;
  mlsmall?: string;
  mrsmall?: string;
  mtsmall?: string;
}
export interface IPaperConfig {
  children:
    | React.ReactChild
    | React.ReactChildren
    | React.ReactChild[]
    | React.ReactChildren[];
  color?: string;
  textshadow?: string;
}

export interface IPaperStyleConfig {
  color?: string;
  textshadow?: string;
}
