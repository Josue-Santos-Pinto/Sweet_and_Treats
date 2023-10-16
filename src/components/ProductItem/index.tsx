import React, { memo } from 'react';
import { Container, OtherOptionText, ProductImg, ProductImgArea } from './styles';
import { Products } from '../../Model/Products';

type ProductItemType = {
  data: Products;
  isEven: boolean;
};

function ProductItem({ data, isEven }: ProductItemType) {
  return (
    <Container isEven={isEven}>
      <ProductImgArea>
        <ProductImg source={{ uri: data.img }} resizeMode="contain" />
      </ProductImgArea>
      <OtherOptionText>{data.name}</OtherOptionText>
    </Container>
  );
}
export default ProductItem;
