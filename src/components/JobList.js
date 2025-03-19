import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Parts4cells: {
      jobTitle: "Software Engineer Intern @",
      duration: "May 2023 - Present",
      location: "Houston, TX",
      desc: [
"Enhanced product search and filtering in an internal application using .NET 7 and C#, optimizing queries, and resulting in a 15% improvement in discoverability.",
"Implemented automated data mapping with AutoMapper, streamlining data handling, and reducing development time by 20%.",
"Designed a scalable service layer leveraging the Repository Pattern, Unit of Work, and Onion Architecture, ensuring 30% greater maintainability, and cleaner data operations.",
"Developed and deployed a scalable MSSQL database solution to efficiently manage repair history for 1,000+ phones, significantly improving data access, and cutting retrieval times by 25%.",
"Built a Data Access Layer with Entity Framework Core using a Database First approach, optimizing inventory management, and enhancing data efficiency by 15%.",
"Utilized Azure Repos for seamless CI/CD pipelines, ensuring efficient code integration, and deployment processes.",
"Automated key tasks using Azure Functions, increasing efficiency, and reducing manual workload.",
      ]
    },
    LeoParts: {
      jobTitle: "Web Developer Intern @",
      duration: "May 2022 - December 2022",
      location: "Houston, TX",
      desc: [
      "Leveraged Scrum and Agile methodologies to ensure iterative progress and timely delivery of high-quality features.",
"Utilized Dependency Injection to manage business logic within services, allowing components to focus solely on UI concerns, resulting in cleaner and more maintainable code.",
"Leveraged Observables and RxJS pipe operators to implement asynchronous operations in Angular applications, improving responsiveness by 20%.",
"Integrated Material Design components for a user-friendly interface, increasing user satisfaction ratings by 15%, and implemented sign-out functionality for effective session management.",
"Leveraged Reactive Forms and FormBuilder to enhance user input handling and validation, reducing input errors by 25%.",








      ]
    }

  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <div className="joblist-location">
            {experienceItems[key]["location"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
