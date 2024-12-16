import { Text, Pressable, StyleSheet } from 'react-native'

interface Props {
    label: string;
    //?METHODS
    onPress?: () => void;
    onLongPress?: () => void;
    position?: 'left' | 'right'
}

export default function FloatingActionButton({ 
    label, 
    onLongPress, 
    onPress, 
    position = 'right' }: Props) {

    return (
        <Pressable
            style={ ({pressed}) => [
                styles.floatingButton,
                position==='right' ? styles.floatRight:styles.floatLeft,
                pressed ? { opacity:0.7 } : {opacity:1}
                
            ]}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text
                style={{ color: 'white', fontSize: 20 }}
            >{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#65558f',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        elevation: 3,
        shadowRadius: 3
    }, 
    floatRight:{
        right: 20,
    },
    floatLeft:{
        left: 20,
    }

}) 