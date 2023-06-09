import theme from '@/public/Utils/theme';

const style={

    // Main Top Box 
    'MainBox':{
        backgroundImage: `url('/Images/aboutus.png')`,
        marginY:10,
        backgroundColor:'#DEDDED',  
        backgroundRepeat:'no-repeat' ,
        backgroundPosition:'95% ',
        height:'482px',
        borderRadius: {xs: '20px',md:'50px' },
       
    },

    // Stack

    'stack':{
        width:{xs:'90%', sm:'60%',md:'40%', lg:'27%'} ,
        paddingTop:{xs:13,md:10},
        marginLeft:{xs:2,sm:6,md:10}
    },

     // TYPO1
     'typo1':{
        fontWeight:900,
        fontSize:{xs:'2.5rem' ,sm:'3rem'},
        lineHeight:1.2  
     },

}


export default style;