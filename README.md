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
- To run on a device or emulator, follow the instructions from the Expo CLI.


![Alt text](/screenshots/PostsScreen.jpg)
![Alt text](/screenshots/splash.jpg)
![Alt text](/screenshots/PostDetailsComments.jpg)
![Alt text](/screenshots/PostDetails.jpg)

