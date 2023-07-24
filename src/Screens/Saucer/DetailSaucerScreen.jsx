import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, Input } from 'react-native'
import { MaxLength } from '../../components/MaxLength';
import { detailSaucer} from '../../themes/customStyles';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import FirebaseContext from '../../context/Firebase/FirebaseContext';
import OrderContext from '../../context/Order/OrderContext';
import { formatearCantidad } from '../../helpers';



const DetailSaucerScreen = ({ route }) => {
  const { saucer } = route.params;
  const { id, name, price, category, description, image } = saucer;
  const [quantity, setQuantity] = useState(1);
  const [saucerTotal, setSaucerTotal] = useState(price);
  const { addProduct, setAddProdduct } = useContext(FirebaseContext);
  const { addSoucer } = useContext(OrderContext);

  const navigation = useNavigation();

  const uriAdd = 'https://firebasestorage.googleapis.com/v0/b/restaurant-cebf6.appspot.com/o/agregar.png?alt=media&token=cf62fb25-7836-4c79-9eec-5d4e404ddad0';
  const uriLow = 'https://firebasestorage.googleapis.com/v0/b/restaurant-cebf6.appspot.com/o/menos.png?alt=media&token=408589f7-0179-4b61-9853-ab365eed12ab';

  const increaseQuantity = () => {
    setQuantity((quantity + 1));
    calculateTotal(quantity + 1);

  }

  const drecreaseQuantity = () => {
    if (quantity !== 1) {
      setQuantity((quantity - 1));
      calculateTotal(quantity - 1);
    }

  }

  const calculateTotal = (newQuantity) => {
    const priceSaucer = price;
    const newTotal = newQuantity * priceSaucer;
    setSaucerTotal(newTotal);
  }

  const addOrder = () => {


    setAddProdduct(true);
    // Separamos el estado del platillo
    const {state, ...saucerMenu} = saucer;

    const currentSaucerOrder = {
      ...saucerMenu,
      quantity,
      saucerTotal
    };
    addSoucer(currentSaucerOrder);
    navigation.goBack();
  }


  return (
    <View style={detailSaucer.container}>

      <Image style={detailSaucer.image} source={{ uri: image }} />

      <View style={detailSaucer.infoSaucer}>
        <Text style={{ color: '#000000', fontSize: 30 }}>{name}</Text>
        <MaxLength text={description} maxLength={50} />
        <Text style={{ color: '#000000', fontSize: 30 }}>{formatearCantidad(price)}</Text>
      </View>

      <View style={detailSaucer.containerTotalSaucer}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>Pedido</Text>

          <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>{formatearCantidad(saucerTotal)}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={detailSaucer.containerQuantity}>
            <TouchableOpacity
              onPress={() => drecreaseQuantity()}
              disabled={(quantity === 1) ? true : false}
            >
              <Image style={[detailSaucer.imageQuantity, (quantity === 1) ? detailSaucer.disableQuantity : null]} source={{ uri: uriLow }} />
            </TouchableOpacity>

            <Text style={detailSaucer.textQuantity}>{quantity}</Text>

            <TouchableOpacity
              onPress={() => increaseQuantity()}
            >
              <Image style={detailSaucer.imageQuantity} source={{ uri: uriAdd }} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={detailSaucer.addButton}
            onPress={addOrder}
          >
            <Text style={detailSaucer.textAddButton}>Agregar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Toast />
    </View>
  )
}

export default DetailSaucerScreen