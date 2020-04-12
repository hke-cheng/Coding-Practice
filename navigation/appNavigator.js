
import React from 'react';

//Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Screens
import HomePage from "../pages/homePage";
import TextPage from "../pages/textPage";
import ExercisePage from "../pages/exercisePage";
import ReducerExercise from "../pages/reduxerExercise";

const AppNavigator = createStackNavigator({
  Home:{
    screen:HomePage,
    navigationOptions:{
      headerTitle:"Tangram System"
    }
  },
  TextPage:{
    screen:TextPage,
    navigationOptions:{
      headerTitle:"Text Components"
    }
  },
  ExercisePage:{
    screen:ExercisePage,
    navigationOptions:{
      headerTitle:"Exercise Component"
    }
  },

  ReducerExercise:{
    screen:ReducerExercise,
  }


});


export default createAppContainer(AppNavigator);