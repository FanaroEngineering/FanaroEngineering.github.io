import GlobalState, { PageType } from "./global_state";

export class GlobalEvents {
  private globalState: GlobalState = new GlobalState();
  private ev: Event = new Event("none");

  constructor() {
    document.onclick = this.onclick;
  }

  private onclick = (ev: MouseEvent): void => {
    this.ev = ev;
    this.ifClickOnLink();
  };

  private ifClickOnLink = (): void => {
    if (this.anchorIsLocalLink) {
      this.ev.preventDefault();
      const anchor: HTMLAnchorElement = this.ev.target as HTMLAnchorElement;
      const localLink: string = anchor.getAttribute("localLink")!;
      this.globalState = new GlobalState(PageType.article);
      console.log(localLink);
      console.log(this.globalState);
    }
  };

  private get anchorIsLocalLink(): boolean {
    return (
      this.ev.target instanceof HTMLAnchorElement &&
      this.ev.target.hasAttribute("localLink")
    );
  }
}
