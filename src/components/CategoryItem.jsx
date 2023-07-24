import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { listCategories } from '../themes/customStyles'

const CategoryItem = ({ category, setCategory }) => {

    return (
        <TouchableOpacity
            onPress={() =>  setCategory(category.name)}
        >
            <View style={listCategories.containerCategory}>
                <Image style={{ width: 32, height: 32 }} source={{ uri:category.image }} />
                <Text style={listCategories.nameCategory}>{category.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryItem