import { Dimensions, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  BottomArea,
  Container,
  ProductsListArea,
  ProductsMenuArea,
  ProductsMenuArrow,
  ProductsMenuIcon,
  ProductsMenuItem,
  TopArea,
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
import getProductsList from '../../services/DB/getProductsList';
import { Products } from '../../Model/Products';
import ProductItem from '../../components/ProductItem';

function Home() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const [currentMenu, setCurrentMenu] = useState(1);
  const [productsList, setProductsList] = useState<Products[]>([]);

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

  const getProductsByCategory = async () => {
    getProductsList().then((products: any) => {
      setProductsList(products.filter((item: Products) => item.cat_id === currentMenu));
    });
  };

  useEffect(() => {
    getProductsByCategory();
  }, [currentMenu]);
  return (
    <Container>
      <TopArea>
        <BreadBanner />
        <ProductsMenuArea>
          {ProductsCategory.map((item, index) => (
            <ProductsMenuItem key={item.id} onPress={() => setCurrentMenu(item.id)}>
              <ProductsMenuIcon>
                {item.id == 1 && <BreadSVG width={40} height={40} />}
                {item.id == 2 && <SnackSVG width={40} height={40} />}
                {item.id == 3 && <DessertSVG width={40} height={40} />}
                {item.id == 4 && <CakeSVG width={40} height={40} />}
              </ProductsMenuIcon>
              {currentMenu == item.id && <ProductsMenuArrow />}
            </ProductsMenuItem>
          ))}
        </ProductsMenuArea>
      </TopArea>
      <BottomArea>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProductsListArea>
            {productsList != null &&
              productsList.map((item, index) => (
                <ProductItem key={item.id} data={item} isEven={index % 2 == 0} />
              ))}
          </ProductsListArea>
        </ScrollView>
      </BottomArea>
    </Container>
  );
}

export default Home;
