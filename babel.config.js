module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [                                                                                                                                                  
    [                                                                                                                                                         
      require.resolve("babel-plugin-module-resolver"),                                                                                                        
      {                                                                                                                                                
        root: ["./src/"],                                                                                                                              
        alias: {                                                                                                                                       
          '@Screens': "./src/Screens",                                                                                                                                                                                                 
          '@Controls': "./src/Controls",   
          '@Static': "./src/Static",   
          '@Layout': "./src/Layout",   
        },                                                                                                                                             
        extensions: [".js", ".jsx", ".tsx", ".ios.js", ".android.js"],                                                                                        
      },                                                                                                                                                      
    ],  
  ],  
};
