// import * as FileSystem from "expo-file-system";

// export const ADD_PLACE = "ADD_PLACE";
// export const SET_PLACES = "SET_PLACES";
// import { insertPlace, fetchPlaces } from "../helpers/db";
// import ENV from "../env";

// //ADD ACTION
// export const addPlace = (title, image, location) => {
//   return async (dispatch) => {
//     const response = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${location.lat}&lon=${location.lng}&lang=de&limit=10&apiKey=${ENV.geoKey}

//     `);

//     const resData = await response.json();

//     if (!resData.results) {
//       throw new Error("Something went wrong!");
//     }

//     //const address = resData.results[0].formatted_address;

//     const fileName = image.split("/").pop();
//     const newPath = FileSystem.documentDirectory + fileName;

//     try {
//       await FileSystem.moveAsync({
//         from: image,
//         to: newPath,
//       });
//       const dbResult = await insertPlace(
//         title,
//         newPath,
//         "Dummy address",
//         15.6,
//         12.3
//       );
//       console.log(dbResult);
//       dispatch({
//         type: ADD_PLACE,
//         payload: { id: dbResult.insertId, title: title, image: newPath },
//       });
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   };
// };

// export const loadPlaces = () => {
//   return async (dispatch) => {
//     try {
//       const dbResult = await fetchPlaces();
//       console.log(dbResult);
//       dispatch({ type: SET_PLACES, places: dbResult.rows._array });
//     } catch (error) {
//       throw error;
//     }
//   };
// };

import * as FileSystem from "expo-file-system";

import { insertPlace, fetchPlaces } from "../helpers/db";
import ENV from "../env";

export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACES = "SET_PLACES";

export const addPlace = (title, image, location) => {
  return async (dispatch) => {
    // const response = await fetch(
    //   `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
    //     location.lat
    //   },${location.lng}&key=${ENV.googleApiKey}`
    // );
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${location.lat}&lon=${location.lng}&lang=en&limit=10&apiKey=${ENV.geoKey}`
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const resData = await response.json();
    console.log(resData);
    if (!resData.results) {
      throw new Error("Something went wrong!");
    }

    const address = resData.results[0].formatted;

    const fileName = image.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
      const dbResult = await insertPlace(
        title,
        newPath,
        address,
        location.lat,
        location.lng
      );
      console.log(dbResult);
      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: dbResult.insertId,
          title: title,
          image: newPath,
          address: address,
          coords: {
            lat: location.lat,
            lng: location.lng,
          },
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPlaces();
      console.log(dbResult);
      dispatch({ type: SET_PLACES, places: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
  };
};
