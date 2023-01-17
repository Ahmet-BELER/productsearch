import  React , { useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import data from "./data.json"
import SongCard from './components/SongCard/SongCard';
import SearchBar from './components/SearchBar/SearchBar';

export default function App() {
  const [list ,setList ] = useState(data)

  const HandleSearches = text => {
    const filteredList = data.filter(song =>{
      const searchText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchText) > -1;

    });


    setList(filteredList)


  }



  const renderSong = ({item}) => <SongCard song={item}/>
  const speratorSong = () => <View style={styles.sperator}/>

  return (

  

    <SafeAreaView style={styles.container}>
    <Text style={styles.aksesuar}>Aksesuar Desıgn</Text>
    
    <SearchBar search = {HandleSearches}/>
     
      <FlatList 
        keyExtractor={item => item.id}
        data={list} 
        renderItem={renderSong}
        ItemSeparatorComponent={speratorSong}
      />
      
    
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sperator:{
borderWidth:0.5,
borderColor:'#e0e0e0',

  },
  aksesuar:{
    paddingTop:20,
    fontSize:30,
    fontWeight:"bold",
    color: '#cc00cc',
    paddingLeft:10,
  }

});
