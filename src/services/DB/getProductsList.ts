import database from '@react-native-firebase/database';

const getProductsList = async () => {
  return new Promise((resolve, reject) => {
    database()
      .ref('/products')
      .on('value', (snapshot) => {
        const product = snapshot.val();
        if (product) {
          resolve(product);
        } else {
          reject('Nenhum produto encontrado');
        }
      });
  });
};

export default getProductsList;
