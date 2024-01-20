import { View, Text, Image, StyleSheet, TextInput} from 'react-native'
import React ,{useState,useEffect}from 'react';
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import Coin from './../../../assets/images/coin.png'
import { Ionicons } from '@expo/vector-icons';
import { getUserDetail } from '../../Services';


export default function Header() {
    const {isLoaded, isSignedIn,user}=useUser();
    const [userPoints, setUserPoints] = useState();

    useEffect(() => {
        user && GetUserDetail();
      }, [user]);
    
    const GetUserDetail = () => {
        getUserDetail(user.primaryEmailAddress.emailAddress).then((res) => {
          setUserPoints(res?.point);
        });
      };
  
    return isLoaded&&(
    <View>
    <View style={[{justifyContent:'space-between'},styles.rowStyle]}>
        <View style={styles.rowStyle}>
            <Image source={{uri:user?.imageUrl}}
            style={{width:50,height:50,borderRadius:99}} />
            <View>
                <Text style={styles.mainHeader}>Bienvenido, </Text>
                <Text style={styles.mainHeader}>{user?.fullName}</Text>
            </View>
        </View>
        <View style={styles.rowStyle}>
            <Image source={Coin} style={{width:35,height:35}}/>
            <Text style={styles.mainHeader}>{userPoints}</Text>
        </View>
    </View>
    <View style={{backgroundColor:Colors.WHITE,paddingLeft:20,
    paddingRight:5,
    borderRadius:99,
    marginTop:25,
    display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <TextInput placeholder='Buscar cursos' 
        style={{fontFamily:'outfit',fontSize:18}}/>
        <Ionicons name="search-circle" size={50} color={Colors.PRIMARY} />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainHeader:{
        color:Colors.WHITE,
        fontSize:20,
        fontFamily:'outfit'
    },
    
    rowStyle:{
        display:'flex',
        flexDirection:'row',
        gap:10,alignItems:'center'
    }
    
})