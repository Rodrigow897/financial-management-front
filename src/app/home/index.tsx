import { MonthList } from '@/components/monthList';
import { Perfil } from '@/components/perfil';
import { View } from "react-native";
import styles from "./styles";

export default function home(){
    return(
        <View style={styles.container}>
            <Perfil
            source={require('.././assets/images/arthur.jpeg')}
                title='Rodrigo'
                subtitle='Vamos organizar suas finanças?'
            />

            <MonthList onChange={(name) => console.log(name)}/>
        </View> 
    );
}
