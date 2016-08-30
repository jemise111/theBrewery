Note to self: run "react-native init --verbose" before start talking

# Very High Level Internals
----

 * iPhones and Android phones have Javascript runtimes. Think browsers. Gives us ability to run JS in apps.
 * Anything View related goes through the bridge -> Native UI Components. The rest is run as JS on a separate thread.
 * Since UI goes through a brige we use the components that the RN team has built. (Or find more on npm or build your own!)
 * Demo is iOS only. Start with iOS, migrate to Android later. Android is slightly behind, developing is a little more painful. Not a good place to start learning. But once you know iOS, Android only has small differences.

Learn more here: https://www.youtube.com/watch?v=7rDsRXj9-cU

# What we'll be building
----
App that hits an API for data, renders a list, click on an item, pushes to a product page.
What this covers:

1. Initializing an app.
2. Navigator component.
3. View, Text, ListView, Image components.
4. API calls using fetch.
5. Dev process. Hot reloading. What to do when things go wrong.
6. Bundling, installing on device.
7. *Disabling ATS for HTTP calls (http://stackoverflow.com/questions/30731785/how-do-i-load-an-http-url-with-app-transport-security-enabled-in-ios-9)*

# Steps
----
Follow everything here to ensure you have all the prerequisites:
https://facebook.github.io/react-native/docs/getting-started.html

After all of that:
```react-native init theBrewery``` (already done)

When that's done:
```react-native run-ios```

In addition to launching the simulator this runs the packager.
The packager is a server that holds our javascript. The phone makes requests to the server when the app starts.
To run the packager without launching the iphone everytime just run ```npm start```.

Now we're ready to start developing.

Open shake menu -> cmd + d

Reload -> cmd + r


...hack...hack...hack...



# Install on phone
----
 * ```open project/ios/project.xcodeproj``` to open xcode
 * Plug in phone
 * Change target to your phone
 * When we install on the phone there is no server so we bundle up the JS and app gets it from an internal file.
 * Run
```
$ react-native bundle --dev false --platform ios --entry-file index.ios.js --bundle-output main.jsbundle
```
 * Open finder and drag this main.jsbundle file into XCode project
 * Click play button, cross your fingers, and pray


# More in depth tutorial and docs
----
 * https://facebook.github.io/react-native/docs/tutorial.html#content

# Books and Videos
----
 * https://egghead.io/series/react-native-fundamentals
 * http://www.reactnative.com/books/

# Keep Up With News
----
 * https://discordapp.com/channels/102860784329052160/102861040538120192
 * https://www.facebook.com/groups/react.native.community
 * http://brentvatne.ca/react-native-newsletter/
