import Card from '@/components/card';
import { MonthList } from '@/components/months';
import { Perfil } from '@/components/perfil';
import months from '@/components/utils/months';
import { useState } from 'react';
import { View } from "react-native";
import styles from "./styles";


export default function home(){
    const [selected, setSelected] = useState(months[0].name);

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
                
            
        </View> 
    );
}
