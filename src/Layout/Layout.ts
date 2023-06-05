import {Dimensions} from 'react-native'

const {width,height} = Dimensions.get('window')
const {width:SW,height:SH} = Dimensions.get('screen')

export const Layout = {
    Window:{
        width,
        height
    },
    Screen:{
        width:SW,
        height :SH,
    },
    IsSmallDevice: width < 375,
    Padding:{
        xxs:1,
        xs:3,
        sm:5,
        md:10,
        lg:20,
        xl:35,
        xxl:50,
    },
    Text:{
        Size:{
            sm:13,
            md:16,
            lg:20,
            xl:27,
        },
        Weight:{
            light:"400",
            normal:"500",
            bold:"700"
        }
    },
    Image:{
        Size:{
            xs: 30,
            sm: 40,
            md: 50,
            lg: 60,
            xl: 100,
            xxl: 140,
            xxxl: 180,
            fullWidth: width,
        },
        Rounded: {
            none: 0,
            light: 4,
            normal: 8,
            medium: 68,
            huge: 1000,
          },
    },
    Button:{
        Height:40,
        MinHeight:40,
        MinWidth:40,
        IconOnly:25,
        Text:16,
    }

}