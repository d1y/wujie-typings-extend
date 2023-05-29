// 
// the type refer to:
//  => https://github.com/developit/mitt/blob/main/src/index.ts
//  => https://github.com/Tencent/wujie/blob/cdc4e3d923620bdc441823da636e41cb47621ded/docs/api/bus.md
//


// ooops! maybe it support [Symbol]
export type EventType = string

export type CallbackResponse = void

export declare type EventObj = {
  [event: string]: Array<Function>
}

export type Handler<T = unknown> = (event: T) => void

export declare interface EventBus<Events extends Record<EventType, unknown>> {

  $on<Key extends keyof Events>(event: Key, fn: Handler<Events[Key]>): CallbackResponse
  $once<Key extends keyof Events>(event: Key, fn: Handler<Events[Key]>): CallbackResponse

  $off<Key extends keyof Events>(event: Key, fn?: Handler<Events[Key]>): CallbackResponse
  $offAll(fn: Function): CallbackResponse

  $emit<Key extends keyof Events>(type: Key, event?: Events[Key]): CallbackResponse

  $clear(): CallbackResponse

}