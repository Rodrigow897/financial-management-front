import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './style'

export default function Add() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name='arrow-back-ios-new' size={24} color='#676767'/>
                </TouchableOpacity>
                <View style={{gap: 2}}>
                    <Text style={styles.titleText}>ORÇAMENTOS MENSAIS</Text>
                    <Text style={styles.subtitleText}>Organize seus limites de gastos por mês</Text>
                </View>
            </View>

            <View style={styles.form}>
                <View style={styles.formTitle}>
                    <Text style={styles.formTitleText}>NOVO ORÇAMENTO</Text>
                </View>
            </View>

        </View>
    )
}

