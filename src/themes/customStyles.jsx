import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');



export const listCategories = StyleSheet.create({
    containerCategory: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        paddingHorizontal: 25,
        paddingVertical: 10
    },
    nameCategory: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase',
        paddingTop: 20
    }
})

export const listStyles = StyleSheet.create({

    container: {
        // backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cotainerSaucer: {
        flex: 0.65,
        // paddingHorizontal: 10,
        paddingVertical: 10
    },
    titleSaucer: {
        color: '#000000',
        fontSize: 15,
        fontWeight: '400'
    },
    priceSaucer: {
        color: '#7d7d7d',
    },
    desriptionSaucer: {
        color: '#7d7d7d',
    },
    cotainerImage: {
        flex: 0.35,
        alignItems: 'center',
        paddingVertical: 10
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFF'
    }

});

export const resumeListStyles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cotainerSaucer: {
        flex: 0.50,
        paddingVertical: 10
    },
    titleSaucer: {
        color: '#000000',
        fontSize: 15,
        fontWeight: '400'
    },
    priceSaucer: {
        color: '#7d7d7d',
    },
    desriptionSaucer: {
        color: '#7d7d7d',
    },
    cotainerImage: {
        flex: 0.35,
        alignItems: 'center',
        paddingVertical: 10,
        marginRight: 10
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFF'
    }

});

export const detailSaucer = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    containerTotalSaucer: {
        backgroundColor: '#FFF',
        bottom: 0,
        flexDirection: 'column',
        height: 100,
        gap: 4,
        justifyContent: 'center',
        padding: 20,
        position: 'absolute',
        width: width,
        height: (height/7)
    },
    containerQuantity: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        width: (width / 3)
    },
    image: {
        width: width,
        height: 350,
        // opacity: 0.1
    },
    infoSaucer: {
        // backgroundColor: 'red', 
        height: (height / 5),
        justifyContent: 'center',
        paddingHorizontal: 20,
        width: width
    },
    textQuantity:{
        color: '#000',
        fontSize: 25,
        fontWeight:'600'
    },
    imageQuantity:{
        width: 20, 
        height: 20,
    },
    disableQuantity:{
        opacity: 0.2
    },
    addButton: {
        backgroundColor: '#ea044d',
        borderRadius: 5,
        padding: 15,
        width: (width / 2)
    },
    textAddButton: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }

});

export const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black'
    },
    globalMargin: {
        marginHorizontal: 20
    }
});
