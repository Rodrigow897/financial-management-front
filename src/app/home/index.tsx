import Button from '@/components/button';
import Card from '@/components/card';
import { Input } from '@/components/input';

import InputValue from '@/components/inputValue';
import InputWithIcon from '@/components/inputWithIcon';
import { MonthList } from '@/components/monthsList';
import { Perfil } from '@/components/perfil';

import { PlusButton } from '@/components/plusButton';
import ReleasesList from '@/components/releasesList';
import months from '@/components/utils/months';
import { MaterialIcons } from '@expo/vector-icons';

import DataPicker from '@/components/dataPicker';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';

import { Alert, FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";



export default function home(){
    const [selected, setSelected] = useState(months[0].name);
    const [counter, setCounter] = useState(0)
    const [modalVisible, setModalVisible] = useState(false);
    const [transactionType, setTransactionType] = useState<'entrada' | 'saida' | null>(null);
    const monthListRef = useRef<FlatList>(null);

       useEffect(() => {
             // Pega o mês atual e gera abreviação
            const currentMonthAbbr = new Date()
                .toLocaleString("pt-BR", { month: "short" })
                .replace(".", "")
                .substring(0, 3)
                .toLowerCase();

            const foundIndex = months.findIndex((m) =>
                m.name.toLowerCase().startsWith(currentMonthAbbr)
            );

            if (foundIndex !== -1) {
                setSelected(months[foundIndex].name);

            // Centraliza o mês atual ao abrir
            setTimeout(() => {
                monthListRef.current?.scrollToIndex({
                index: foundIndex,
                animated: true,
                viewPosition: 0.5, // ← centraliza
             });
            }, 300);
            }
    }, []);

    const handleSelectMonth = (item: string, index: number) => {
        setSelected(item);

        monthListRef.current?.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.5,
         });
        };

  

    type ReleaseType = {
        id: string;
        name: string;
        category: string;
        value: number
        date: string;
        icon: keyof typeof MaterialIcons.glyphMap;
        onDelete: (id: string) => void;
    };

    const [releases, setReleases] = useState<ReleaseType[]>([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState('');
    const [date, setDate] = useState('');
    const [icon, setIcon] = useState('');




    function handleAddRelease() {


        if (name === null || category === null || value === null || transactionType === null || date === null) {
            Alert.alert('Preencha todos os campos');
            return;
        };
    
        const newRelease: ReleaseType = {
          id: Date.now().toString(),
          name,
          category,
          date,
          icon: transactionType === 'entrada' ? 'arrow-drop-up' : 'arrow-drop-down',
          value: parseFloat(value),
          onDelete: handleDelete,
        };
    
        if(isNaN(parseFloat(value))) {
            Alert.alert('Valor inválido');
            return;
        }
        
        console.log(newRelease);
    
        setReleases([...releases, newRelease]);
        setValue('');
        setCounter(counter + 1);
        setModalVisible(false);
        setName('');
        setCategory('');
        setTransactionType(null);
        setDate('');
      }

    function handleDelete(id: string) {
    setReleases((prev) => prev.filter((item) => item.id !== id));
    setCounter(counter - 1);
  }

  const EmptyListMessage = () => (
        <View style={styles.emptyContainer}>
            <MaterialIcons style={styles.emptyIcon} name="sticky-note-2" size={30} color="#676767"/>
            <Text style={styles.emptyText}>Você ainda não registrou despesas ou receitas {"\n"} neste mês</Text>
        </View>
    );


    return(
        <View style={styles.container}>
            <Perfil
            source={require('.././assets/images/arthur.jpeg')}
                title='Rodrigo'
                subtitle='Vamos organizar suas finanças?'
                backLogin={() => Alert.alert("Sair", "Deseja mesmo sair?", [
                { text: "Cancelar", onPress: () => console.log("Cancelado"), style: "cancel"},
                { text: "OK", onPress: () => router.replace('/register')},
            ])}
            />

            <MonthList
                /// <reference path="" />
                ref={monthListRef}
                selected={selected}
                onChange={setSelected}
                onScroll={handleSelectMonth}
            />

            {/* Card */}
            <Card
                name={selected}
                year={2025}
                used={0.00}
                limit={0.00}
    
                onAdd={() => Alert.alert("Definir orçamento", "Deseja mesmo definir um novo orçamento?", [
                    { text: "Cancelar", onPress: () => console.log("Cancelado"), style: "cancel"},
                    { text: "OK", onPress: () => router.push('../add')},
                ])}
            />

            {/* Lançamentos */}
            <View style={styles.releasesContainer}>
                <View style={styles.counterBox}>
                    <Text style={styles.counterTitle}>LANÇAMENTOS</Text>
                    <View style={styles.counterNumber}>
                        <Text>{counter}</Text>
                    </View>
                </View>

                <ReleasesList  
                   onDelete={handleDelete}
                   data={releases}
                   listEmpyComponent={EmptyListMessage}

                />
            </View>

            <PlusButton
                onOpen={() => setModalVisible(true)}
            />

            {/* Modal */}
            <Modal transparent visible={modalVisible} animationType='slide'>
                <BlurView  style={styles.blurBackground}></BlurView>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalTitle}>
                            <Text style={styles.modalTitleText}>Novo lançamento</Text>
                            
                            <MaterialIcons name='close' size={24} color='#676767' onPress={() => setModalVisible(false)}/>
                        </View>

                        <View style={styles.modalInputs}>
                            
                            <View style={{gap: 10, width: '100%'}}>
                                <Input
                                    placeholder='Título da transação'
                                    onChangeText={setName}
                                ></Input>
                                <InputWithIcon
                                    placeholder='Categoria'
                                    icon='label-important-outline'
                                    onChangeText={setCategory}
                                />
                            </View>

                            <View style={styles.valueInputContainer}>
                                <InputValue
                                    name='R$'
                                    placeholder='0,00'
                                    keyboardType='numeric'
                                    onChangeText={setValue}
                                />
                                <DataPicker
                                    icon='calendar-month'
                                    placeholder='00/00/0000'
                                    editable={true}
                                    onChangeDate={setDate}
                                />
                            </View>

                            {/*button entrada / saida*/}
                            <View style={styles.inOutContainer}>
                            <TouchableOpacity
                                style={[
                                    styles.inButton,
                                    transactionType === 'entrada' && styles.selectedButtonIn
                                ]}
                                    onPress={() => setTransactionType('entrada')}>
                                <Text
                                style={[
                                    styles.inText,
                                    transactionType === 'entrada' && styles.selectedText
                                ]}>
                                Entrada
                                </Text>
                                <MaterialIcons
                                name='arrow-drop-up'
                                size={24}
                                color={transactionType === 'entrada' ? '#fff' : '#1FA342'}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                styles.outButton,
                                transactionType === 'saida' && styles.selectedButtonOut
                                ]}
                                onPress={() => setTransactionType('saida')}
                            >
                                <Text
                                style={[
                                    styles.outText,
                                    transactionType === 'saida' && styles.selectedText
                                ]}
                                >
                                Saída
                                </Text>
                                <MaterialIcons
                                name='arrow-drop-down'
                                size={24}
                                color={transactionType === 'saida' ? '#fff' : '#D93A4A'}
                                />
                            </TouchableOpacity>
                            </View>

                        

                            <View style={{width: '100%', marginTop: 35}}>
                                <Button      
                                title='Salvar'
                                onPress={handleAddRelease}
                                />
                            </View>
                           
                        </View>
                    </View>
                </View>

            </Modal>
                
        </View> 
    );
}
