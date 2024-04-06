# SocialMediaApp

SocialMediaApp is a sample social mobile application developed with React Native and TypeScript. It emulates a social platform with a simple yet intuitive interface allowing users to view posts and their associated comments.

## Description

The app contains three screens:

- Splash Screen: The initial screen showing the app's logo or name.
- Home (List of Posts): Displays a list of posts fetched from a remote service.
- Post Details: Shows detailed information about a post and lists comments related to it.

Posts and comments are fetched from the public API provided by [GoRest](https://gorest.co.in/).

## Project Structure

The application follows a modular and clean architecture for easy navigation and maintenance

## Dependencies

The following are the main dependencies used in the project:

- `@react-navigation/native`
- `@react-navigation/native-stack`
- `@reduxjs/toolkit`
- `react-redux`
- `axios`
- `expo`
- `expo-linear-gradient`
- `expo-status-bar`
- `react-native-safe-area-context`
- `react-native-screens`

## Running the Application

- Clone the repository from GitHub.
- Navigate to the project directory and install dependencies with npm install or yarn.
- Start the application with expo start.
- Run the App on Your Device

    - Android:
     Open the Expo client app on your Android device and scan the QR code displayed in the Expo developer tools in your web browser. Alternatively, you can press a in the terminal where your Expo development server is running to open the 
     app directly if you have an Android emulator installed and running.

    - iOS:
      Open the Camera app on your iOS device and scan the QR code displayed in the Expo developer tools in your web browser. You will receive a notification which, once tapped, opens the Expo client and loads your app. Note that due to 
      Apple's restrictions, you might need to use the Expo client app to scan the QR code directly rather than using the Camera app.

## Application snapshots
SplashScreen:
![Alt text](/screenshots/splash.jpg)

HomeScreen:
![Alt text](/screenshots/PostsScreen.jpg)

PostDetailsScreen with comments visible:
![Alt text](/screenshots/PostDetailsComments.jpg)

PostDetailsScreen:
![Alt text](/screenshots/PostDetails.jpg)

