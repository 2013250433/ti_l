import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const Header = () => (
    <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>Test</Text>
    </View>
)

const styles = StyleSheet.create({
    HeaderContainer: {
        backgroundColor: '#2c3e50',
        width: '100%',
        padding: 5,
        marginTop: StatusBar.currentHeight
    },
    HeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    }
});

export default Header;