import React, { useContext, useEffect } from 'react'
import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native'

import OrderContext from '../../context/Order/OrderContext'

import FirebaseContext from '../../context/Firebase/FirebaseContext';
import { collection, addDoc, doc } from 'firebase/firestore';

import { ResumeSaucerItem } from '../../components/ResumeOrder/ResumeSaucerItem';
import { HeaderTitle } from '../../components/HeaderTitle';
import { styles } from '../../themes/customStyles';
import { formatearCantidad } from '../../helpers';
import { EmptyOrderScreen } from './EmptyOrderScreen';

import { useNavigation } from '@react-navigation/core';

const ResumeOrderScreen = () => {
  const { firestore } = useContext(FirebaseContext);
  const { order, total, totalResume, submitCurrentOrder } = useContext(OrderContext);
  const navigation = useNavigation();

  const { width, height } = Dimensions.get('window');


  useEffect(() => {
    calculateTotal();
  }, [order])


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

  const calculateTotal = () => {
    const total = order.reduce((acumulate, saucer) => {
      return acumulate + saucer.saucerTotal;
    }, 0);

    totalResume(total);
  }


  const addOrder = async (order) => {
    try {
      const ordersRef = collection(firestore, 'orders');
      console.log(ordersRef);
      const order_success = await addDoc(ordersRef, order);
      console.log(order_success.id);

      // Enviar el id del pedido al state
      submitCurrentOrder(order_success.id);
      navigation.navigate('ProgressOrder');
    } catch (error) {
      console.log(error);
    }
  }
  const progressOrder = async () => {

    const orderFireBase = {
      order,
      state: 'joined',
      total: Number(total),
      deliveryTime: 0,
      created_at: Date.now()
    }

    // console.log(orderFireBase);

    // agregar la orden a firebase
    const order_submit = await addOrder(orderFireBase);

  }
  return (
    (order.length > 0) ?
      <View style={{ flex: 1, ...styles.globalMargin }}>
        <HeaderTitle title={'Resumen Pedido'} />
        <FlatList
          data={order}
          renderItem={({ item }) => <ResumeSaucerItem saucer={item} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={itemSeparator}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', bottom: 0, marginBottom: 20 }}>

          <View style={{ width: (width / 1.5) }}>
            <Text style={{ color: '#000', fontSize: 30 }}>Total</Text>
          </View>
          <View style={{ width: (width / 4) }}>
            <Text style={{ color: '#000', fontSize: 25, marginTop: 'auto' }}>{formatearCantidad(total)}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => progressOrder()}
          style={{ backgroundColor: '#ea044d', borderRadius: 5, padding: 15, marginBottom: 30 }}
        >
          <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
            Ordenar Pedido
          </Text>
        </TouchableOpacity>
      </View>
      :
      <EmptyOrderScreen />
  )
}

export default ResumeOrderScreen