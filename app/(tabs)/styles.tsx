import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    loading: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    loading_text: {
        fontSize: 20,
        fontWeight: "600",
    }
})
