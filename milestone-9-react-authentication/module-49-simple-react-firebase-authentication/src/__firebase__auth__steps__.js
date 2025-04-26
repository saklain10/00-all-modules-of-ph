/**
 * 1. Create a project in firebase console
 * 2. In the project install firebase: npm i firebase
 * 3. Bring firebase config into your project(from firebase website)
 * 4. By using useAuth create the auth and export it
 * 5. In the login page: Create a provider GoogleAuthProvider
 * 6. Use signInWithPopUp and pass auth and provider
 */


/**
 * 1. Firebase Project create
 * 2. Authentication > config > 
 */

/**
 * social login: Github
 */

/**
 * 1. What is Firebase?
Firebase হলো Google-এর বানানো একটা Backend-as-a-Service (BaaS) প্লাটফর্ম, যেটা দিয়ে আমরা Mobile App আর Web App এর backend কাজ (like authentication, database, hosting) খুব সহজে করতে পারি।
In short: Firebase = ready-made backend + extra tools.

2. Is firebase frontend or backend?
Firebase মূলত backend service.
তবে, ফ্রন্টএন্ড (like React, Flutter) থেকে সরাসরি Firebase এর সাথে connect করে কাজ করা যায়, কোন আলাদা backend server ছাড়াই।
Example: React App --> Direct connect with Firebase Authentication.

3. What is firebase architecture?
Firebase architecture হলো একটা Cloud-based system, যেখানে

Frontend (App বা Website)

Firebase services (like Authentication, Firestore Database, Hosting)

আর Google Cloud এর server একসাথে connect হয়।
Simple version:
User -> Frontend -> Firebase Service -> Google Cloud Server.

4. What are the features of firebase? / What tasks you can accomplish with firebase?
Firebase দিয়ে তুমি অনেক কাজ করতে পারো:

User authentication (Email, Google Sign-in, Facebook login)

Real-time database বা Firestore database

File storage (images, pdf upload)

Hosting (website live করা)

Cloud functions (serverless backend logic)

Notifications পাঠানো (push notification)।
Short-cut মনে রাখার ট্রিক: Auth, Database, Hosting, Storage, Functions.

5. Differences between Firebase and MongoDB:


Firebase	MongoDB
Ready-made backend + database service	শুধু database, backend আলাদা করতে হয়
Realtime sync করে (especially Realtime Database)	Manual sync করতে হয়
Hosting, Authentication সব included	আলাদা করে server/backend লাগবে
Best for small to medium projects quickly develop করার জন্য	Best for complex, large backend system
6. Have you ever used firebase database (real-time database)?
Yes ভাই!
আমি Firebase এর Realtime Database ব্যবহার করছি একটা small chatting app প্রজেক্টে।
Real-time মানে কেউ message পাঠালে, সাথে সাথে অন্য user দেখতে পারে, no reload needed.

7. Can you briefly explain the GitHub authentication process with Firebase?
হ্যাঁ, সহজে বলি:

প্রথমে Firebase Console-এ গিয়ে Authentication > Sign-in methods থেকে GitHub enable করতে হয়।

GitHub developer settings এ গিয়ে App তৈরি করে Client ID আর Client Secret নিতে হয়।

এই ID আর Secret Firebase Console-এ paste করতে হয়।

এরপর frontend থেকে signInWithPopup(provider) method দিয়ে GitHub login করা যায়।
Shortcut: Firebase Console Setup + GitHub App + SignInWithPopup.

8. Which method is used to Sign-in the user in Firebase Email/Password authentication?
Method এর নাম:
👉 signInWithEmailAndPassword(auth, email, password)
এই method দিয়ে user email আর password দিয়ে login করে।

9. Authentication VS Authorization:

Authentication: আমি কে? (identity verify করা)
Example: Email দিয়ে Login করা।

Authorization: আমার কি access আছে? (permission check করা)
Example: Admin user কি dashboard access করতে পারবে?

Shortcut মনে রাখ:
Authentication = তুমি কে?
Authorization = তুমি কি করতে পারবে?

10. Can you tell me names of 3 authentication methods?
Of course! Example দিলাম:

Password authentication

SMS / Email code verification

Fingerprint authentication

আরো আছে, যেমন Face ID, Voice recognition।

11. Which authentication methods have you ever used for your project purpose?
আমি আমার project-এ নিচের authentication গুলো use করছি:

Email/Password authentication

Google Sign-in authentication

GitHub authentication (for practice projects)


 */


/**
 * NOTION NOTES:
 * https://www.notion.so/Module-49-firebase-auth-1e1c4829a50880d5af61c7000842b586?pvs=4
 */