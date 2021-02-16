const appObjects = {
  dataExplorer: {
    name: 'Atl Metro Housing Data Explorer',
    routeTitle: 'dataExplorer',
    imagePath: '/images/MAHS-data-explorer.png',
    backgroundColor: '#537a8e',
    description:
      'The Metro Atlanta Housing Strategy provides detailed information and data about the region’s housing market and offers a set of actionable steps that local communities can consider taking to address their housing issues.  (Still Under Development)',
    role:
      'Front End Developer: I worked with team members to design a layout that provides clear usability to the user.  We aggregate population Percent, Average, Weighted Average, & Sum data against the MAHS 10 Subareas of atlanta.   Purpose-built to provide cross-reference data to city planners.  We set out to provide a better solution than the current options that were slow and clunky.',
    link: 'https://metroatlhousing-data-explorer.herokuapp.com/',
  },
  dataNexus: {
    name: 'Data Nexus',
    routeTitle: 'dataNexus',
    imagePath: '/images/dataNexus.png',
    backgroundColor: '#41674764',
    description:
      "Neighborhood Nexus is a regional information system, providing data, tools and expertise as a catalyst to create more equitable and livable communities for all of the region’s citizens. Our mission is to build a culture of data-informed decision-making among Georgia's social sector.",
    role:
      'Full Stack Developer: My role on data nexus was maintenance and optimizing the performance of the application. We improved the application efficiency dramatically. Leveraging how we rendered our data over the react-leaflet map, and optimizing structural build features in react, we cut the performance time in half. ',
    link: 'http://data.neighborhoodnexus.org/',
  },

  evictionTracker: {
    name: 'Atl Metro Housing Eviction Tracker',
    routeTitle: 'evictionTracker',
    imagePath: '/images/ATL-eviction-tracker.png',
    backgroundColor: '#7c2b28aa',
    description:
      'The Metro Atlanta Eviction Tracker project is designed to provide eviction filings data for research, practice, and policy purposes beyond the immediate threat of COVID-19.',
    role:
      'Full Stack Developer with a focus on the front end: I wrote a script using Nightmare.js to parse data from the magistrate courts record sites for Clayton, Cobb, Dekalb, Fulton and Gwinnett counties.  I integrated the data onto a charts using the react-Rechats packages. I built and designed the styling/css and layout for the site.',
    link: 'https://metroatlhousing.org/atlanta-region-eviction-tracker/',
  },
  chipperPets: {
    name: 'Chipper Pets',
    routeTitle: 'chipperPets',
    imagePath: '/images/chipper-min.png',
    backgroundColor: '#e88300aa',
    description:
      'Designed to make lost-pet reunification easier, by eliminating unnecessary stressors on veterinary practices and humane societies. We developed a software were pet owners update the contact information used for lost pet reunification.  We took the unknowingly broken system that keeps pet information out of date and brought the system back into 2020.',
    role:
      'Full Stack Developer and project manager: We started the project by lining up a time-line and creating deliverables. Throughout the project, I scheduled peer reviews at the end of each sprint. I worked on the front and back end of the project to meet deadlines and to make sure that everyone on the team was crossing their finish-line. Primary developments were Authorization, Authentication and maintaining private/protected routes for the Professionals.  ',
    link: 'https://chippers-pets.herokuapp.com/',
  },
};

export { appObjects };
