
What is the best way to have a user build a polygon using drag and drop? (What libraries assist if new libraries are useful compared to native features already discussed?)

Several ways to do this:
- Google maps drawing library
- mapbox-gl-draw
- Leaflet + Leaflet.draw:
    - battle teseted polygon draw/edit draw:editvertex.
- (OpenLayers)[https://openlayers.org/en/latest/examples/draw-and-modify-features.html]: Draw, modify, snap. Precise.

how do I form a grid off of a shape that is true to the maps size?


What are some ways I can store the users polygon so that it loads when they open this core application?

How do mapbox and google maps compare in terms of satellite maps?  Who has the most up to date?
They are very similar in utilitiy.  Googlemaps seems to have more maps, but mapbox also does well by buying updated maps in areas wehre there is demand.


Are google map polygons exportable so they can be rendered independent of Google maps?
Yes, the polygons only.

What processing weight of laoding google images? 
- Too many tile requests
- Re-render churn
- Heavy DOM/React reflows

How to address this?
- Create an explore mode to render titles.
- Constrain zoom - 
- Limit viewport - Max map size
- Prefer 512px tiles (over 256px).  High-dpr tiles. (See MapTiler’s guidance)
- Vertex drag updates (16-32 ms with requestAnimationFrame) so your' not recomputing area/grid every mousemove
- Cheap re-renders using simpler geometry
- WebGL renderers //! What are WebGL?
