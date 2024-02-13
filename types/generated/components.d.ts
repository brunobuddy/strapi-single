import type { Schema, Attribute } from '@strapi/strapi';

export interface TitleTitle extends Schema.Component {
  collectionName: 'components_title_titles';
  info: {
    displayName: 'title';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'title.title': TitleTitle;
    }
  }
}
