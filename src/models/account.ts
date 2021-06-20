import Entry from "./entry";

export default class Account {
  id?: string;
  title: string;
  entries?: Entry[];

  constructor({ id, title }: { id?: string; title: string }) {
    if (id) {
      this.id = id;
    }

    this.title = title;
  }
}
