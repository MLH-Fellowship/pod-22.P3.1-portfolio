const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [77.2090, 28.6139],
        },
        properties: {
          title: "Mayank Mamgain",
          description: " I have no special talents. I am only passionately curious.",
        },
      },
  
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [ 85.296013,23.344315],
        },
        properties: {
          title: "Shambhavi Singh",
          description: " A motivated fresher with an ability to adapt changes in a dynamic environment.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [77.216721,28.644800],
        },
        properties: {
          title: "Anjali Saxena",
          description: " Career-focused individual who loves to take up new challenges, explore different domains and acquire new skills.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [ 77.412615,23.259933 ],
        },
        properties: {
          title: "Khushhal Reddy",
          description: " Detail-oriented individual and a relentless problem-solver.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-103.349609,20.659698],
        },
        properties: {
          title: "Pablo Agustín Ortega Kral",
          description: " I am passionate about all things science and technology. I am a persistent and responsible team player who love taking on interesting and challenging projects.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [83.01041,25.31668 ],
        },
        properties: {
          title: "Suraj Singh",
          description: " A keen observer and a passionate learner.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-73.935242,40.730610],
        },
        properties: {
          title: "Efaz Ahmed",
          description: " A passionate developer who strives to bridge the gap between theory and practice by bringing ideas to life.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [81.878357,25.473034],
        },
        properties: {
          title: "Satya Prakash Satyam",
          description: " Funny guy with wide range of dreams.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [ 36.81667,-1.28333 ],
        },
        properties: {
          title: "Mutugi Mutuma",
          description: " A lifelong learner",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [  73.856255,18.516726 ],
        },
        properties: {
          title: "Ankita Ugale",
          description: " Introverted extrovert who loves her chai",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [  92.036835,26.441786 ],
        },
        properties: {
          title: "Jyotimoy Kashyap ",
          description: " Loves to see the world through the lens ",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [ 78.491684,17.387140 ],
        },
        properties: {
          title: "Anusha Nath Roy",
          description: " An explorer and problem solver who loves to develop unique, optimal and creative solutions to solve day-to-day problems with technology.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [ 85.158875,25.612677 ],
        },
        properties: {
          title: "Abhishek Kumar Singh",
          description: " Career-focused individual who loves to take up new challenges, explore different domains and acquire new skills.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [ 72.877426,19.076090  ],
        },
        properties: {
          title: "Omkar Acharekar",
          description: " I love working on interesting ideas.I am passionate,reliable and highly motivated individual.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [  77.216721,28.644800  ],
        },
        properties: {
          title: " Unnati",
          description: "A Young Mind with High thoughts and aspirations!",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [ 77.216721,28.644800 ],
        },
        properties: {
          title: "Aastha Aggarwal",
          description: " Always open to learn and explore unique ideas.",
        },
      },
    ],
  };
  
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2FzaGExMDAxIiwiYSI6ImNsMW43YWh4ZDBsNmszbHRjMTFqOW81MGIifQ.R7T_odfkKOkNXQ96XuQ10A";
  const map = new mapboxgl.Map({
    container: "htmlmap", // container ID
    style: "mapbox://styles/mapbox/light-v10",
    center: [77.2090, 28.6139],
    zoom: 1,
  });
  
  for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement("div");
    el.className = "marker";
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(feature.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            `<h5>${feature.properties.title}</h5><p>${feature.properties.description}</p>`
          )
      )
      .addTo(map);
  }
  