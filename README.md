# lifestyle-app

> Take Home Assignment from Hokenso

Since im new to cordava im referring to this:
https://itnext.io/make-hybrid-platform-cordova-vue-webpack-2fb7031c4f9b

Beside cordova documentation itself.

1. creating new cordova app (cordova create lifestyle_app)
2. apply VueJs project based on top (vue init webpack lifestye_app)
3. Installed and used VueX and VueRouter
4. My plan on router and component was like this:-
   -since il be just creating 1 section, so the 'challenges' section will be on default ("/")
   -then the other 3 component can be on other router (as in router/index.js)
   -the bottom nav bar will be available to all pages thus located in app.vue
   -Ive decided to used VueX to feed the data to the Challenges component
   -for the component chalenges's data load, I used v-for iteration and bind all the challenges data(save is json object in src/assets/challenges.js to mimic as if an api request from backend) -
   -then use mapstate to grab all the 'challenges' to the challenges component.
   -style it with html and css.
   -the search bar, I just v-model the input and use the javascript filter and match method. filter before iterating.
5. I didnt manage to create the filter slider feature( tried to create manually and find if there external module but unsuccess)

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# Running on Android
cordova platform add android

cordova run android

# Running on iOS
cordova platform add ios

cordova build ios
```
