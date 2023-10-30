import database from '@react-native-firebase/database';

const getRecipesList = async () => {
  return new Promise((resolve, reject) => {
    database()
      .ref('/recipes')
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

export default getRecipesList;
