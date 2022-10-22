import * as React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import exampleCardImage from '../../public/images/iphone14card.jpeg'


interface IProductCardProps {
  title: string;
  image: string;
  price: string;
  description: string;
}

const Container = styled.div`
  display: flex;
`;
const ProductCard: React.FunctionComponent<IProductCardProps> = ({title, image, price, description}) => {
  return (
    <Card sx={{
      // maxWidth: '400px',
      width: '23.52941rem'
    }}>
      <CardMedia
        component='img'
        // height={'auto'}
        // width={'100%'}
        image={'/images/iphone14card.jpeg'}
        alt='Product Image'
      />
      <CardContent>
      This is the new phone
      </CardContent>
    </Card>
  );
};

export default ProductCard;
