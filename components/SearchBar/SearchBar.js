import React from "react"; 
import { Text, View, TextInput} from "react-native"; 
import styles from "./SearchBar.style";

const SearchBar = (props) => {


    return ( 
<View style={styles.container}>
        <TextInput 
            placeholder="Search..."
            onChangeText={props.search}
        /> 
        </View>

        
     )

}

export default SearchBar

