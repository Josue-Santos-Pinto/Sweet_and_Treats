import { ScrollView, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {
  Container,
  ProductsMenuArea,
  ProductsMenuArrow,
  ProductsMenuIcon,
  ProductsMenuItem,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import GetCurrentUserInfo from '../../services/User/GetCurrentUserInfo';
import { setAvatar, setEmail, setName } from '../../redux/reducers/userReducer';
import Svg, { Image as SvgImage } from 'react-native-svg';
import BreadBanner from '../../components/BreadBanner';
import BreadSVG from '../../assets/icons/bread.svg';
import SnackSVG from '../../assets/icons/snack.svg';
import DessertSVG from '../../assets/icons/dessert.svg';
import CakeSVG from '../../assets/icons/cake.svg';

function Home() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const ProductsCategory = [
    { id: 1, name: 'Pão', icon: 'bread' },
    { id: 2, name: 'Salgados', icon: 'snack' },
    { id: 3, name: 'Sobremesas', icon: 'dessert' },
    { id: 4, name: 'Bolos', icon: 'cake' },
  ];

  useEffect(() => {
    GetCurrentUserInfo(user.userID).then((currentUser) => {
      dispatch(setName(currentUser.name));
      dispatch(setEmail(currentUser.email));
      if (currentUser.avatar) dispatch(setAvatar(currentUser.avatar));
    });
  }, []);
  return (
    <Container>
      <ScrollView>
        <BreadBanner />
        <ProductsMenuArea>
          {ProductsCategory.map((item, index) => (
            <ProductsMenuItem key={item.id}>
              <ProductsMenuIcon>
                {item.id == 1 && <BreadSVG width={40} height={40} />}
                {item.id == 2 && <SnackSVG width={40} height={40} />}
                {item.id == 3 && <DessertSVG width={40} height={40} />}
                {item.id == 4 && <CakeSVG width={40} height={40} />}
              </ProductsMenuIcon>
              <ProductsMenuArrow />
            </ProductsMenuItem>
          ))}
        </ProductsMenuArea>
      </ScrollView>
    </Container>
  );
}

export default Home;
