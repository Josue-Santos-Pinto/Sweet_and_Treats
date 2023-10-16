import React, { memo } from 'react';
import { Container, OtherOptionText, Slash } from './styles';
import { Products } from '../../Model/Products';

type ProductItemType = {
  data: Products;
};

function ProductItem({ data }: ProductItemType) {
  return (
    <Container>
      <OtherOptionText>{data.name}</OtherOptionText>
    </Container>
  );
}
export default ProductItem;
