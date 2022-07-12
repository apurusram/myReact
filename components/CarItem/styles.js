import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
    
      },
    
      titles: {
        marginTop: '40%',
        width: '100%',
        alignItems: 'center',
    
      },
    
      title: {
        fontSize: 30,
        fontWeight: '500',
    
      },
    
      subtitle: {
        fontSize: 16,
        color: '#5c5e62',
    
      },
    
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position:'absolute',
      },

      buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
      }

});

export default styles;