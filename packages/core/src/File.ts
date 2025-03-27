import { Attr } from "pinia-orm/decorators";
import Model from "./Model";

class File extends Model {
  static entity = "files";
  static baseUrl = "files";
  static namespace = "core";

  @Attr("") declare id: number | string;
  @Attr(null) declare disk_name: string;
  @Attr(null) declare thumb: string;
  @Attr(null) declare path: string;
  @Attr(null) declare file_name: string;
  @Attr(null) declare ext: string;
  @Attr(null) declare title: string;
  @Attr(null) declare description: string;
}

export default File;
