/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import type {FusionPlugin, Token} from 'fusion-core';

type FontURLsType = {
  woff: string,
  woff2: string,
};

type FontFallbackType = {
  name: string,
  styles?: {
    [string]: string,
  },
};

export type AtomicFontType = {
  urls: FontURLsType,
  fallback?: FontFallbackType,
  styles?: {},
};

export type AtomicFontsObjectType = {
  [string]: AtomicFontType,
};

export type StyledFontsObjectType = {
  [string]: Array<AtomicFontType>,
};

export type ConfigType = {
  fonts: AtomicFontsObjectType | StyledFontsObjectType,
  preloadDepth?: number,
  withStyleOverloads?: boolean,
};

export type AtomicConfigType = {
  fonts: AtomicFontsObjectType,
  preloadDepth: number,
  withStyleOverloads?: boolean,
  preloadOverrides?: {}, // intended for testing only
};

export type ConfigTokenType = Token<ConfigType>;

type DepsType = {
  config: ConfigTokenType,
};
export type PluginType = FusionPlugin<DepsType, *>;
export type PluginTokenType = Token<PluginType>;
