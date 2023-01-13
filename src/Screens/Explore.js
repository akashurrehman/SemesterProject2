import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {  Text, StyleSheet, View,Image,TextInput, TouchableOpacity, FlatList,Alert, Modal, Pressable,  } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import { db } from "./../Api/Authentication/FireStore";
import TMenu from '../Components/Explore/TopMenu';
import {
    collection,
    setDoc,
    doc,
    query,
    where,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
  } from "firebase/firestore";
import { auth } from '../Api/Authentication/Auth';
  


const   Explore   =   ({navigation})   =>   {
        const [searchQuery, setSearchQuery] = React.useState('');
        const [results,setResult]=useState([]);
        const [detail,setDetail]=useState('')
        const [modalVisible, setModalVisible] = useState(false);
        const timeout = React.useRef(null); 

        const onChangeHandler = (searchQuery) => {
        clearTimeout(timeout.current);
        setSearchQuery(searchQuery);
        timeout.current = setTimeout(()=>{
            navigation.navigate("SearchScreen",{result:`"${searchQuery}"`})
        }, 2000);

    }
    const CreateWishlist = ()=>{
        console.log("CreateWishlist")
        
            setDoc(doc(collection(db, "wishlist")), {
                detail:detail
            })
            .then(() => {
                console.log("Data saved of the Wishlist");
                Alert.alert("Added to Wishlist")
                setModalVisible(!modalVisible) 
            })
              .catch((error) => {
                console.log(error);
            });

    }
    const  checkUser=()=>{
        auth.onAuthStateChanged((user) => {
            if (user) {
                setModalVisible(true)
            }
            else{
                navigation.navigate("Login")
            }
            
         });
    }
    const apiMethods =(locationName)=>{
        let arr=[];
        var location=locationName;
        console.log("Api Method Called")
        const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/locations/search',
        params: {
            query: location,
            limit: '50',
            offset: '0',
            location_id: '1',
            currency: 'USD',
            sort: 'relevance',
            lang: 'en_US'
        },
        headers: {
            'X-RapidAPI-Key': 'cb3c6f9f7cmsh113492b34cc6df8p125578jsn11a8ac9214be',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        };
        axios.request(options).then(function (response) {
            for (let i = 0; i < response.data.data.length; i++) {
                arr.push(response.data.data[i].result_object);
            }
            setResult(arr);
            console.log("results",results)
        }).catch(function (error) {
            console.error(error);
        })
}
    useEffect(()=>{
        apiMethods("Best places")
    },[])
    return   (
        <ScrollView>
            <Searchbar style={{marginHorizontal: 15, borderRadius: 20, marginTop: 30}}
                placeholder="Where to? Anywhere  |  Any week "
                onChangeText={ (searchQuery) => {onChangeHandler(searchQuery)}}
                value={searchQuery}
                loading={true}
                testID="searchbar"
                theme={{colors: {primary: 'black'}}}
                inputStyle={{fontSize: 16, color: 'black'}}
            />
            <View>
                <View style={{height: 90, marginTop: 10, backgroundColor:"#ffffff" }}>
                    
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={()=>apiMethods('Top')}>
                        <TMenu imageUri={require('../../assets/Images/Icons/Trending.jpg')}
                            Name="Trending"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Adapted")}>
                        <TMenu imageUri={require('../../assets/Images/Icons/Adapted.jpg')}
                            Name="Adapted"
                        />
                    </TouchableOpacity>  
                    <TouchableOpacity onPress={()=>apiMethods("Play")}>
                        <TMenu imageUri={require('../../assets/Images/Icons/Play.jpg')}
                            Name="play"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Hanoks")}>
                        <TMenu imageUri={require('../../assets/Images/Icons/Hanoks.jpg')}
                            Name="Hanoks"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Private Rooms")}>
                        <TMenu imageUri={require('../../assets/Images/Icons/PrivateRooms.jpg')}
                            Name="Private Rooms"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Castle")}>
                        <TMenu imageUri={require('../../assets/Images/Icons/Castles.jpg')}
                            Name="Castle"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Amazing Views")}>
                        <TMenu imageUri={require('../../assets/Images/Icons/Beach.jpg')}
                            Name="Amazing Views"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Tropical Places")}>
                        <TMenu imageUri={require('../../assets/Images/Icons/Tropical.jpg')}
                            Name="Tropical"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("A Frames")}>
                        <TMenu imageUri={require('../../assets/Images/Icons/AFrames.jpg')}
                            Name="A-Frames"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Historical places")}>
                        <TMenu imageUri={require('../../assets/Images/Icons/Historicalhomes.jpg')}
                            Name="Historical Homes"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Beach")}>
                        <TMenu imageUri={require('../../assets/Images/Icons/Beach.jpg')}
                            Name="Beach"
                        />
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={()=>apiMethods("Lakes")}>
                        <TMenu imageUri={require('../../assets/Images/Icons/Beach.jpg')}
                            Name="Lakes"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("National Parks")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="National Parks"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Golfing")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Golfing"
                        />
                    </TouchableOpacity>   
                    <TouchableOpacity>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Tiny Homes"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="A-Frames"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Arctic")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Arctic"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Mansion")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Mansion"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Design"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Island")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Island"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Vineyards")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Vineyards"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Skiing")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Skiing"
                        />
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={()=>apiMethods("BeachFront")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="BeachFront"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Boats")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Boats"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Yurts")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Yurts"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Deserts")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Deserts"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Barns")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Barns"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Campars")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Campars"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Towers")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Towers"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Trulli")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Trulli"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Tree Houses")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Tree Houses"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Surfing")}>
                        <TMenu imageUri={require('../../assets/Images/Explore-Images/Image1.webp')}
                            Name="Surfing"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Riads")}>
                        <TMenu imageUri={require('../../assets/Images/Icons/Riads.jpg')}
                            Name="Riads"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("LakeFront")}>
                        <TMenu imageUri={require('../../assets/Images/Icons/Lakefront.jpg')}
                            Name="LakeFront"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Earth Homes")}>
                        <TMenu imageUri={require('../../assets/Images/Icons/Historicalhomes.jpg')}
                            Name="Earth Homes"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("Ryokans")}>
                        <TMenu imageUri={require('../../assets/Images/Icons/Ryokans.jpg')}
                            Name="Ryokans"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>apiMethods("WindMills")}>
                        <TMenu imageUri={require('../../assets/Images/Icons/Windmills.jpg')}
                            Name="WindMills"
                        />
                    </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
            <View style={{display:"flex",paddingHorizontal:5,paddingTop:5}}>
                {
                    results.map((item) => <View key={item.index}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Bookmethod",{result:`${item.name}`})}}>
                        <Image style={styles.imageCss} 
                            source={{ uri: `${item.photo.images.large.url}` }} />
                    </TouchableOpacity>
                    <View style={{marginHorizontal:15,marginBottom:15}}>
                    <Text style={{fontSize:18,fontStyle:"bold", opacity:0.7}}>
                        Place Name: {item.name}
                    </Text>
                    <Text style={{fontSize:20,fontStyle:"bold",opacity:0.7}}>
                        Rating: {item.rating}                   
                    </Text>
                    <Text style={{fontSize:20,fontStyle:"bold",opacity:0.7}}>
                        Address: {item.address}
                    </Text>
                    <TouchableOpacity  onPress={() => checkUser()}>
                        <Text style={{fontSize:20,fontStyle:"bold",opacity:0.7}}>
                        Add to Wishlist: <Image source={require("../../assets/Images/Explore-Images/Like.webp")} style={{display:"flex",resizeMode:"cover",height:30,width:30}}/> 
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>
                )}
            </View>
            <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Added to Wishlist.");
                setModalVisible(!modalVisible);
                }}
            >
                <View  style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Enter details for Whishlist!</Text>
                        <TextInput
                            placeholder="Enter Category...."
                            value={detail}
                            onChangeText={text => setDetail(text)}
                            style={styles.input}
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {CreateWishlist()}}
                        >
                        <Text  style={styles.textStyle}>Save to Wishlist</Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>
            </View>
            
            {/*Sectin-2*/}
            <View style={styles.container}>
                <Text style = { styles . text } > Search Everywhere! </Text>
                    <TouchableOpacity style={styles.button}>
                        <Text>See All</Text>
                </TouchableOpacity>
                </View>

            {/*Section-3*/}
            <View style={styles.container}>
                <Text style = { {fontSize:30, fontStyle:"bold", textAlign:'center',justifyContent:'center'} } > Inspiration for Future Gateways! </Text>
            </View>
        </ScrollView> 
    )
}
const   styles   =   StyleSheet . create ( {
    text :   {
        fontSize :   20,
        padding:10,
    },
    container :   {
        flexDirection :   'row',
        justifyContent :   'space-between',
        marginHorizontal :   10,
        marginTop: 10
    },
    button:{
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10
    },
    input:{
        fontSize:20,
        borderWidth:1,
        padding:15,
        borderColor: "#ccc",
        borderRadius: 5,
    },
    imageCss:{
        borderRadius: 40,
        width: 350,
        height: 300,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }

})
export   default   Explore;






