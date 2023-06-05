const tintColorLight = '#33449b';
const tintColorDark = '#fff';


export const COLOR = {
    Neutral: [ //màu tối
        '#CDD2DE', //xám icon 
    ],
    Primary:[ // màu chính
        '#F3743D',//cam đậm
        '#FFA082' //cam nhạt
    ],
    light: {
        text: '#000',
        textSecondary: '#151515',
        textPlaceholder: '#ddd',
        textDisabled: '#535353',
        background: '#fff',
        card: '#fff',
        tint: tintColorLight,
        primary: tintColorLight,
        secondary: 'rgba(1,1,1,0.4)',
        disabled: 'rgba(1,1,1,0.1)',
        textBtn: '#fff',
        textBtnDisabled: 'rgba(1,1,1,0.2)',
        textInput: '#9CABC2',
        textInputBorder: '#9CABC2',
        textInputPlaceholer: '#CDD2DE',
        textInputBg: '#fff',
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorLight,
        rippleColor:'#ddd'
      },
      dark: {
        text: '#fff',
        textSecondary: '#151515',
        textPlaceholder: '#ddd',
        textDisabled: '#535353',
        background: '#000',
        card: '#121212',
        tint: tintColorDark,
        primary: tintColorDark,
        secondary: 'rgba(255,255,255, 0.8)',
        disabled: 'rgba(255,255,255, 0.3)',
        textBtn: '#000',
        textBtnDisabled: 'rgba(255,255,255, 0.3)',
        textInput: '#fff',
        textInputBorder: 'rgba(255,255,255, 0.3)',
        textInputPlaceholer: '#999',
        textInputBg: 'rgba(255,255,255, 0.1)',
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorDark,
        rippleColor:'rgba(255,255,255, 0.3)'
      },
}
