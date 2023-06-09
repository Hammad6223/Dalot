import theme from '@/public/Utils/theme';

const style={

    // Main Top Box 
    'MainBox':{
     backgroundImage: `url('/Images/Banner.png')`,
     backgroundColor:'#DEDDED',  
     backgroundRepeat:'no-repeat' ,
     backgroundPosition:'right',
     height:'500px',
     borderRadius: {xs: '20px',md:'50px' }
    },

    // TYPO1
    'typo1':{
       width: {xs:'95%',sm:'70%' ,md: '55%',lg:'40%' ,xl:'30%' },
      
    },

    // Typo2
    'typo2':{
        width: {xs:'90%',sm:'60%' ,md: '45%',lg:'26%'   }
    },

    // Paper
    'paper':{

        height:70,width:{xs:'95%',md:'70%'},  
        borderRadius:'0px 20px 20px 20px' , 
        backgroundColor:'rgba(255, 255, 255, 0.8)',
        display: 'flex', alignItems: 'center' 
    },

    // IconButton
    'IconButton':{
      p: '10px',
      backgroundColor:theme.primary,
       borderRadius:1.5,
       marginRight:{xs:1,md:3,lg:5},
       color:'#fff' 
    }
}


export default style;