import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CardView = ({title,message}) => (
    <View style={styles.CardContainer}>
        <Text style={styles.CardTitle}>{title}</Text>
        <Text style={styles.CardContent}>{message}</Text>
    </View>
)

const styles = StyleSheet.create({
    CardContainer: {
        elevation: 5,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        margin: 20,
        elevation: 5
    },
    CardTitle: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 3
    },
    CardContent: {
        width: '100%',
        fontSize: 12,
        padding: 3
    },
});

export default CardView;