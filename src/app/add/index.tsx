import BudjetList from '@/components/budjets'
import Button from '@/components/button'
import DataPicker from '@/components/dataPicker'
import InputValue from '@/components/inputValue'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'

type BudjetItem = {
  id: string;
  name: string;
  year: string;
  value: number;
};


export default function Add() {
    const data = new Date()
    const [budjets, setBudjets] = useState<BudjetItem[]>([]);
    const [name, setName] = useState(data.toLocaleString('pt-BR', { month: 'long' }));
    const [year, setYear] = useState('2025');
    const [value, setValue] = useState('6000');

     function handleAddBudjet() {
    if (name === null || year === null || value === null) {
        Alert.alert('Preencha todos os campos');
        return;
    };

    const newBudjet: BudjetItem = {
      id: Date.now().toString(),
      name,
      year,
      value: parseFloat(value),
    };

    setBudjets([...budjets, newBudjet]);
    setName('');
    setYear('');
    setValue('');
  }


function handleDelete(id: string) {
    setBudjets((prev) => prev.filter((item) => item.id !== id));
  }

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
                    <DataPicker
                        style={{width: 166}}
                        icon='calendar-month'
                        placeholder='00/00/0000'
                        value={year}
                        onChangeText={setYear}
                    />
                    <InputValue
                        style={{width: 153}}
                        name='R$'
                        placeholder='0,00'
                        keyboardType='numeric'
                        value={value}
                        onChangeText={setValue}
                    />
                </View>

                <View style={{marginTop: 20, width: '90%'}}>
                <Button
                        title='Salvar'
                        onPress={handleAddBudjet}
                    />
                </View>


                {/*registered budgets List*/}
                <View style={styles.registeredBudgets}>
                    <View style={styles.registeredBudgetsHeader}>
                        <Text style={styles.registeredBudgetsTitle}>ORÇAMENTOS CADASTRADOS</Text>
                    </View>

                    
                    <BudjetList
                        data={budjets}
                        onDelete={handleDelete}
                    />
                    
                        
                </View>

            </View>

        </View>
    )
}

