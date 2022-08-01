/*
 * @Author: Pacific_D
 * @Date: 2022-08-01 16:23:40
 * @LastEditTime: 2022-08-01 17:19:23
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-markdown\packages\preload\src\nodeCrypto.ts
 */
import { type BinaryLike, createHash } from "crypto"

export function sha256sum(data: BinaryLike) {
  return createHash("sha256").update(data).digest("hex")
}
