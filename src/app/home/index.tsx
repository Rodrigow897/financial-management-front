import Card from '@/components/card';
import { MonthList } from '@/components/months';
import { Perfil } from '@/components/perfil';
import { PlusButton } from '@/components/plusButton';
import ReleasesList from '@/components/releasesList';
import months from '@/components/utils/months';
import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { Modal, Text, View } from "react-native";
import styles from "./styles";




export default function home(){
    const [selected, setSelected] = useState(months[0].name);
    const [counter, setCounter] = useState(0)

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
            />

            {/* Modal */}
            <Modal transparent visible={true} animationType='slide'>
                <BlurView intensity={50} tint="dark" style={styles.blurBackground}></BlurView>
                <View style={styles.modal}>
                     <Text>Modal</Text>
                </View>

            </Modal>
                
        </View> 
    );
}
