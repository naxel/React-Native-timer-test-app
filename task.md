# Flexi React Native Test - Timer app

## Task

Create both an iOS and Android app timer app with 2 screens as follows:

### Navigation:
- Must be a pull out side menu which allows the user to switch between the two screens

### Screen 1 (Home):
- Must have a background image (of your choosing) which wraps the entire background of the screen excluding the navigation bar at the top.
- Must have a white or black (depending on your background image) filled in circle in the middle of the screen which contains a LIVE timer counting down from 10 minutes (user cannot set this).
- Timer must show the minutes and seconds as it's counting down.
- Must have a "Start" and "Stop" button, and when timer gets to 0, Buttons should change to a single button which says "Reset".  Upon resetting, the two "Start" and "Stop" buttons will appear.
- Start button is disabled if timer is running.
- Stop button is disabled is timer is stopped.

### Screen 2 (Result):
- Must display the current LIVE value of the timer from Screen 1.  No buttons or interactions, just the current LIVE value.

NOTE: Design isn't important here, this is about functionaity and how you use React / Redux. 
Please also keep in mind the background image and where this is stored/accessed for performance.

We are happy for you to use any third-party components to complete this test.  But please write a README file which contains an explaination as to why you used these libraries.

All submissions should be on GitHub.
