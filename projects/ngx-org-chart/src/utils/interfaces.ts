export interface IAvatar {
  imageUrl?: string;
  label: string;
}

export interface IInfo {
  fullname: string;
  title: string;
}

export interface IChartNode {
  avatar: IAvatar;
  info: IInfo;
}

export interface IChart {
  parentNode: IChartNode;
  childNodes?: IChart[];
}
