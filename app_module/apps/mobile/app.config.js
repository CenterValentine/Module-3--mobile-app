// NOTE: Environment variable names must not include hyphens when accessed via dot notation (use underscores).
// try { require('dotenv').config(); } catch {}
import dotenv from 'dotenv'
dotenv.config({ path: '../../.env' }) // load root
dotenv.config()                      // then local (overrides)

// Use one “non-specific” fallback for both platforms
// app.config.js
export default {
  expo: {
    name: "GardenPlot",
    slug: "garden-plot",
    scheme: "sharedcore",
    version: "1.0.0",
    "owner": "centervalentine",
    orientation: "portrait",
sdkVersion: "52.0.0",
    
plugins: [],

    ios: { supportsTablet: true,
       config: {
        // eas secret:create --name xyz --value<value>
        // These will populate process.env.* during the build, app.config.js reads
        googleMapsApiKey: process.env.IOS_GOOGLE_MAPS_API_KEY ?? process.env.NON_SPECIFIC_GOOGLE_MAPS_API_KEY
      },
      "infoPlist": {
      "ITSAppUsesNonExemptEncryption": false
    },
      icon: "./assets/adaptive-icon.png",
      bundleIdentifier: "com.dpv.gardenplot",
    
    },

    android: { 
      package: "com.dpv.gardenplot",
      adaptiveIcon:
       { foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#4CAF50"},
        config: {
        googleMaps: {
          apiKey: process.env.ANDROID_GOOGLE_MAPS_API_KEY ?? process.env.NON_SPECIFIC_GOOGLE_MAPS_API_KEY
        }
      }},
    web: { bundler: "metro" },

    extra: {
      eas: {
        projectId: "5bcb4efe-450f-430b-b2cb-68ded0be5378",
      },
    },
  }
}
