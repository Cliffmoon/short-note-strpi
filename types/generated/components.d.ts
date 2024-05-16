import type { Schema, Attribute } from '@strapi/strapi';

export interface ImgsImages extends Schema.Component {
  collectionName: 'components_imgs_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    image: Attribute.Media;
    caption: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'imgs.images': ImgsImages;
    }
  }
}
