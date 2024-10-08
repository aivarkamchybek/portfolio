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
      duration: "JAN 2023 - June 2024",
      location: "Houston, TX",
      desc: [
"Enhanced product search and filtering in a .NET application, improving discoverability by 15% through optimized EntityFramework queries",
"Implemented automated data mapping with AutoMapper, reducing development time by 20% and ensuring efficient data handling",
"Optimized the store credit and refund system, resulting in a remarkable increase in revenue within two months, leveraging proficiency in process improvement and revenue generation strategies",
"Designed a scalable service layer using the Repository Pattern, Unit of Work, and Onion Architecture for clean and efficient data operations",
"Designed and deployed a scalable MySQL database solution to efficiently manage repair and maintenance history for over 1,000+ phones, ensuring organized and accessible data storage",
"Successfully reconciled and synchronized recorded MySQL inventory with user-provided counts using Java JDBC, ensuring precise inventory management",

      ]
    },
    LeoParts: {
      jobTitle: "Web Developer @",
      duration: "JAN 2022 - AUG 2022",
      location: "Houston, TX",
      desc: [
      "Enhanced the Magento e-commerce site by integrating Angular, achieving a 20% faster load time and a 15% increase in user engagement",
      "Optimized server-side functionalities, resulting in a 25% improvement in data processing efficiency",
      "Collaborated in cross-functional teams to enhance problem-solving capabilities and code quality",
      "Demonstrated strong problem-solving skills by addressing complex technical challenges and finding efficient solutions",
      "Integrated Material Design components for a user-friendly interface and implemented sign-out functionality for effective session management",
      "Leveraged Reactive Forms and FormBuilder to enhance user input handling and validation",
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
