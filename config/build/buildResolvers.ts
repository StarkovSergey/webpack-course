import {Configuration} from "webpack"
import {BuildOptions} from "./types/types"

export const buildResolvers = (options: BuildOptions): Configuration['resolve'] => {
  return {
    extensions: ['.tsx', '.ts', '.js'], // чтобы не указывать расширения при импортах
    alias: {
      '@': options.paths.src,
    }
  }
}