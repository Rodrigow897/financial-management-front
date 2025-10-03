import { FlatList, Text } from "react-native"
import releases from "../utils/releases"


export function releasesList(){
    return(
        <FlatList
            data={releases}
            renderItem={({ item }) => <Text>{item}</Text>}
        />
    )
}