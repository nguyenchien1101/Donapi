/**
 * Get the source of a node or at a position.
 *
 * @param {VFile | VFileValue} file
 *   File in which `value` exists.
 * @param {Node | NodeLike | Position | PositionLike | null | undefined} value
 *   Value to get.
 * @returns {string | undefined}
 *   Source of `value` in `doc`, if available.
 */
export function source(
  file: VFile | VFileValue,
  value: Node | NodeLike | Position | PositionLike | null | undefined
): string | undefined
export type Position = import('unist').Position
export type Node = import('unist').Node
export type VFile = import('vfile').VFile
export type VFileValue = import('vfile').VFileValue
export type NodeLike = {
  type: string
  position?: PositionLike | null | undefined
}
export type PositionLike = {
  start?: PointLike | null | undefined
  end?: PointLike | null | undefined
}
export type PointLike = {
  line?: number | null | undefined
  column?: number | null | undefined
  offset?: number | null | undefined
}
