export interface AlbumInfo {
  songs: any[];
  paid: boolean;
  onSale: boolean;
  mark: number;
  blurPicUrl: string;
  copyrightId: number;
  alias: any[];
  artists:  Artists[];
  picId: number;
  artist: Artist;
  publishTime: number;
  company: string;
  briefDesc: string;
  picUrl: string;
  commentThreadId: string;
  pic: number;
  companyId: number;
  description: string;
  tags: string;
  status: number;
  subType: string;
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
}

export interface Artists {
  img1v1Id: number;
  topicPerson: number;
  followed: boolean;
  alias: any[];
  picId: number;
  musicSize: number;
  albumSize: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  trans: string;
  name: string;
  id: number;
  img1v1Id_str: string;
}

export interface Artist {
  img1v1Id: number;
  topicPerson: number;
  followed: boolean;
  alias: any[];
  picId: number;
  musicSize: number;
  albumSize: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  trans: string;
  name: string;
  id: number;
  picId_str: string;
  img1v1Id_str: string;
}
