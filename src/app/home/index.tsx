import Card from '@/components/card';
import { Input } from '@/components/input';
import InputValue from '@/components/inputValue';
import InputWithIcon from '@/components/inputWithIcon';
import { MonthList } from '@/components/months';
import { Perfil } from '@/components/perfil';
import { PlusButton } from '@/components/plusButton';
import ReleasesList from '@/components/releasesList';
import months from '@/components/utils/months';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { Modal, Text, View } from "react-native";
import styles from "./styles";




export default function home(){
    const [selected, setSelected] = useState(months[0].name);
    const [counter, setCounter] = useState(0)
    const [modalVisible, setModalVisible] = useState(true);


    return(
        <View style={styles.container}>
            <Perfil
            source={require('.././assets/images/arthur.jpeg')}
                title='Rodrigo'
                subtitle='Vamos organizar suas finanças?'
            />

            <MonthList 
                selected={selected}
                onChange={setSelected}
            />

            {/* Card */}
            <Card
                name={selected}
                year={2025}
                used={0}
                limit={0}
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
                                ></Input>
                                <InputWithIcon
                                    placeholder='Categoria'
                                    icon='label-important-outline'
                                />
                            </View>

                            <View style={styles.valueInputContainer}>
                                <InputValue
                                    name='R$'
                                    placeholder='0,00'
                                />
                                <InputValue
                                    icon='calendar-month'
                                    placeholder='00/00/0000'
                                />
                            </View>


                           
                        </View>
                    </View>
                </View>

            </Modal>
                
        </View> 
    );
}
