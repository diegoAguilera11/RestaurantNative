import React, { useContext, useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import FirebaseContext from '../context/Firebase/FirebaseContext';

import { SaucerItem } from '../components/SaucerItem';
import { LoadingScreen } from './LoadingScreen';
import { HeaderTitle } from '../components/HeaderTitle';
import { ButtonCart } from '../components/ButtonCart';
import { styles } from '../themes/customStyles';
import CategoryItem from '../components/CategoryItem';
import Toast from 'react-native-toast-message';

export const MenuScreen = () => {

  const [category, setCategory] = useState('todo');
  const { status, menu, categories, obtainMenu, addProduct } = useContext(FirebaseContext);

  useEffect(() => {
    obtainMenu();
  }, []);

  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: 'Platillo agregado!',
      text2: 'El platillo ha sido agregado con éxito',
    })
    // console.log('toast-2');
    // setAddProdduct(false);
  }, [addProduct]);

  const itemSeparator = () => {
    return (
      <View style={{
        borderBottomWidth: 1,
        opacity: 0.2,
        marginVertical: 8
      }}>

      </View>
    )
  }

  const itemSeparatorCategory = () => {
    return (
      <View style={{
        borderBottomWidth: 1,
        opacity: 0.2,
        marginHorizontal: 8
      }}>

      </View>
    )
  }

  const filteredData = (category !== 'todo')
    ? menu.filter(item => item.category === category)
    : menu;

  return (
    (status === 'checking') ?
      <LoadingScreen />
      :
      <View style={{ flex: 1, ...styles.globalMargin }}>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={categories}
            renderItem={({ item }) => <CategoryItem category={item} setCategory={setCategory} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={itemSeparatorCategory}
            horizontal
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <HeaderTitle title='Nuestro Menú' />
          <ButtonCart/>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={filteredData}
            renderItem={({ item }) => <SaucerItem saucer={item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={itemSeparator}
          />
        </View>
        <Toast />
      </View>
  )
}