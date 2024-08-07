# Welcome to User Information App 👋

## Brief Overview

The App fetches and displays random user data as a profile. You can go to next profiles and also back to previous profiles using "Next" and "Previous" buttons.

![User Information App](https://github.com/user-attachments/assets/f9d624ce-646d-4330-ac19-6e6c232c3ab4)


## Detailed Overview

_layout.tsx :- This component uses the @react-navigation/stack library to create a stack navigator. The stack navigator is then used to define a screen named 'Index', which renders the App component.

index.tsx :- The component named App. This component fetches random user data from an API and displays the user's information in a user interface.

      Next Button :- This button display the next user information.
      
      Previous Button :- This button display the previous user information.

## File Structure
User-Information-App --> app --> tabs --> index.tsx and _layout.tsx


## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```
