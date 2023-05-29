import { EventBus } from "./bus_overwrite";

export interface WujieInstance<T extends {}> {
  bus: EventBus<T>;
  shadowRoot?: ShadowRoot;
  props?: { [key: string]: any };
  location?: Location;
}