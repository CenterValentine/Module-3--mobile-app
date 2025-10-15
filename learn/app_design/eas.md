
# Initialize EAS in your repo
npx expo install eas-cli
eas login
eas init

# Dev client (cloud)
eas build --profile development --platform ios

# Or local dev client
npx expo prebuild
npx expo run:ios   # uses your local Xcode/Pods

# Release builds
eas build --profile production --platform ios
eas build --profile production --platform android

# Submit to stores
eas submit --platform ios
eas submit --platform android

# OTA updates (JS/assets only)
eas update --branch production --message "Bugfix"