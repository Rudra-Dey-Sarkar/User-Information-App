import { View, Text, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

//The main App component that fetches and displays random user data.
const App = () => {
    const [Users, setUsers] = useState([]); // This hook is use for storing all users data
    const [Index, setIndex] = useState(0); // This hook is use as a index for the array of object (it stores user datas) stored in the user hook  


    // Fetch data from Random Data API and storing those data to User
    useEffect(() => {
        fetch("https://random-data-api.com/api/users/random_user?size=80")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, []);

    const currentUser = Users[Index]; // currentUser is storing the current User from User[Index] 
    return (
        <View style={styles.display}>
            {/* Checking current user and displaying information of the current user*/}
            {currentUser ? (
                <>
                    <View style={styles.user}>

                        <View style={styles.userInside}>
                            <Image style={styles.userPicture} source={{ uri: currentUser.avatar }}></Image>

                            <Text style={styles.mainText}>{currentUser.first_name}</Text>
                            <Text style={styles.allText}>Username   :- {currentUser.username}</Text>
                            <Text style={styles.allText}>First Name :- {currentUser.first_name}</Text>
                            <Text style={styles.allText}>Last Name  :- {currentUser.last_name}</Text>
                            <Text style={styles.allText}>Email          :- {currentUser.email}</Text>
                            <Text style={styles.allText}>Password   :- {currentUser.password}</Text>
                            <Text style={styles.allText}>ID                :- {currentUser.id}</Text>
                            <Text style={styles.allText}>UID             :- {currentUser.uid}</Text>
                        </View>

                    </View>
                    {/* Buttons to go to next user and return to the previous user*/}
                    <View style={styles.buttonBar}>
                        <TouchableOpacity style={styles.prevButton} onPress={() => { if (Index > 0) { setIndex(Index - 1) } }}><Text style={styles.prevText}>Previous</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.nextButton} onPress={() => { if (Index < Users.length) { setIndex(Index + 1) } }}><Text style={styles.nextText}>Next</Text></TouchableOpacity>
                    </View>
                </>
            ): (
                <View style={styles.loading}>
                    <Text style={styles.loading_text}>Loading.....</Text>
                </View>
            )}
        </View>
    );
};

//Styles for the App component and the user profile
const styles = StyleSheet.create({
    display: {
        height: '100%',
    },
    user: {
        margin: "auto",
        padding: 5,
    },
    userInside: {
        backgroundColor: "#C9C9C9",
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 15 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    userPicture: {
        margin: "auto",
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: '#3b3b3b',
        borderRadius: 50,
    },
    mainText: {
        fontSize: 25,
        margin: "auto",
        fontWeight: "bold",
    },
    allText: {
        fontSize: 15,
        fontWeight: "600",
        marginTop: 2,
        marginBottom: 2,
        padding: 5,
        borderWidth: 2,
        borderColor: '#3b3b3b',
        borderRadius: 9,
    },
    buttonBar: {
        height: "auto",
        width: "100%",
        padding: 10,
        backgroundColor: "darkgrey",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    prevButton: {
        margin: 5,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 25,
        width: 100,
    },
    nextButton: {
        margin: 5,
        backgroundColor: "#3b3b3b",
        padding: 10,
        borderRadius: 25,
        width: 100,
    },
    prevText: {
        fontSize: 15,
        fontWeight: "bold",
        margin: "auto",
    },
    nextText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        margin: "auto",
    },
    loading:{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    loading_text:{
        fontSize: 20,
        fontWeight: "600",
    }
})

export default App;
