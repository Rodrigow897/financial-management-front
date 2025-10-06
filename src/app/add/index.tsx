import Budjet from '@/components/budjet'
import Button from '@/components/button'
import InputValue from '@/components/inputValue'
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

                 <View style={styles.formInputs}>
                    <InputValue
                        style={{width: 153}}
                        icon='calendar-month'
                        placeholder='00/0000'
                        keyboardType='numeric'
                    />
                    <InputValue
                        style={{width: 153}}
                        name='R$'
                        placeholder='0,00'
                        keyboardType='numeric'
                    />
                </View>

                <View style={{marginTop: 20, width: '90%'}}>
                <Button
                        title='Salvar'
                    />
                </View>


                {/*registered budgets List*/}
                <View style={styles.registeredBudgets}>
                    <View style={styles.registeredBudgetsHeader}>
                        <Text style={styles.registeredBudgetsTitle}>ORÇAMENTOS CADASTRADOS</Text>
                    </View>

                    <Budjet
                        name='janeiro'
                        year='2025'
                        value= {4000}    
                    />
                    <Budjet
                        name='março'
                        year='2024'
                        value= {2500}    
                    />
                        
                </View>

            </View>

        </View>
    )
}

