import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export const MaxLength = ({text, maxLength}) => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleShowFullText = () => {
        setShowFullText(!showFullText);
    };
    return (
        <View>
            <Text>
                {showFullText ? text : text.slice(0, maxLength)}
                {text.length > maxLength && !showFullText && '...'}
            </Text>
            {text.length > maxLength && (
                <TouchableOpacity onPress={toggleShowFullText}>
                    <Text>
                        {showFullText ? 'Ver menos' : 'Ver más'}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    )
}
