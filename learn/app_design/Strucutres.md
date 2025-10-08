

Each user will have a multiPolygon GeoJSON object used to render their "Garden Plots"

{
  "user":{
    //Each property snapshot is one location. 
    "properties":[
{
  "type": "MultiPolygon",
   // User's MultiPolygon[0] sets the territory the garden plot is in.  MultiPolygon[1:] are the garden plots
   //overlap is not allowed between any coordinates.  A single line with opposing orientations may be shared.

  "coordinates": [
    [[[0,0],[2,0],[2,2],[0,2],[0,0]]],
// a grid is rendered from the coordinates.
    [[[3,3],[5,3],[5,5],[3,5],[3,3]]]
    
  ]
},
    ],

  }
}

