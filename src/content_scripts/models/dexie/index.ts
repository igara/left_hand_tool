import Dexie from 'dexie';

export interface MapToNodeNameAndHTMLTagName {
  node_name: string;
  html_tag_name: string;
}

class DB extends Dexie {
  map_to_node_name_and_html_tag_names: Dexie.Table<MapToNodeNameAndHTMLTagName, string>;

  constructor() {
    super('left_hand_tool');
    this.version(1).stores({
      map_to_node_name_and_html_tag_names: '&[node_name+html_tag_name]',
    });

    this.map_to_node_name_and_html_tag_names = this.table(
      'map_to_node_name_and_html_tag_names',
    );
  }
}

export const IndexDB = new DB();
