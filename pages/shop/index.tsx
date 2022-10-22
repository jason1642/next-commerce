import * as React from 'react';
import styled from 'styled-components'
import ProductCard from '../../components/shop/productCard';

interface IShopIndexProps {
}

const Container = styled.div`
  display: flex;

`;

const ProductCardTray = styled.div`
  display: flex;
`;

const ShopIndex: React.FunctionComponent<IShopIndexProps> = (props) => {
  return (
    <Container>
      This is the index of the shop directory / 


      <ProductCardTray>
        <ProductCard title='iPhone 14 pro' image='' price='From $999 or $41.62/mo.per month for 24 mo.months before trade-inFootnote' description='Pro. Beyond.'/>
      </ProductCardTray>
    </Container>  
  );
};

export default ShopIndex;
