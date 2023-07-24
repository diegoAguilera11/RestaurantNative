import React, { useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import OrderContext from '../context/Order/OrderContext'
import FirebaseContext from '../context/Firebase/FirebaseContext'
import { doc, onSnapshot } from "firebase/firestore";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';


export const ProgressOrderScreen = () => {

  const { doneOrderID } = useContext(OrderContext);
  const { firestore } = useContext(FirebaseContext);
  const [order, setOrder] = useState({});
  const [time, setTime] = useState(0);
  console.log(doneOrderID);

  useEffect(() => {
    obtainOrder();
  }, [])

  const obtainOrder = () => {
    const unsubscribe = onSnapshot(doc(firestore, "orders", doneOrderID), (doc) => {
      setOrder(doc.data());
      setTime(doc.data().deliveryTime);
    });

    console.log(order);

  }

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60

    return `${minutes}:${seconds}`
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tu orden ha sido ingresada</Text>
      {
        time > 0 && (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tu orden estara lista en:</Text>
            <CountdownCircleTimer
              isPlaying
              duration={time}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[7, 5, 2, 0]}
            >
              {({ remainingTime }) => <Text>{children(remainingTime)}</Text>}
            </CountdownCircleTimer>
          </View>
        )
      }
    </View>
  )
}