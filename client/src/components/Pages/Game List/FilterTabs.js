import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import FilteredGamesContainer from './FilteredGameList';
import { userGraphql } from '../../../graphql/user';
import { useParams } from 'react-router-dom';
import {useQueryWithError} from '../../../helpers/customHooks';


function TabPanel(props) {
  const { children, value, index, games, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: 220,
    width: 200,
    marginLeft: "-250px",
    marginTop: "50px"
  },
});

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.root}
      >
        <Tab label="A" {...a11yProps(0)} />
        <Tab label="B" {...a11yProps(1)} />
        <Tab label="C" {...a11yProps(2)} />
        <Tab label="D" {...a11yProps(3)} />
        <Tab label="E" {...a11yProps(4)} />
        <Tab label="F" {...a11yProps(5)} />
        <Tab label="G" {...a11yProps(6)} />
        <Tab label="H" {...a11yProps(7)} />
        <Tab label="I" {...a11yProps(8)} />
        <Tab label="J" {...a11yProps(9)} />
        <Tab label="K" {...a11yProps(10)} />
        <Tab label="L" {...a11yProps(11)} />
        <Tab label="M" {...a11yProps(12)} />
        <Tab label="N" {...a11yProps(13)} />
        <Tab label="O" {...a11yProps(14)} />
        <Tab label="P" {...a11yProps(15)} />
        <Tab label="Q" {...a11yProps(16)} />
        <Tab label="R" {...a11yProps(17)} />
        <Tab label="S" {...a11yProps(18)} />
        <Tab label="T" {...a11yProps(19)} />
        <Tab label="U" {...a11yProps(20)} />
        <Tab label="V" {...a11yProps(21)} />
        <Tab label="W" {...a11yProps(22)} />
        <Tab label="X" {...a11yProps(23)} />
        <Tab label="Y" {...a11yProps(24)} />
        <Tab label="Z" {...a11yProps(25)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <FilteredGamesContainer value = 'A'/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FilteredGamesContainer value = 'B' />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FilteredGamesContainer value = 'C' />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <FilteredGamesContainer value = 'D' />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <FilteredGamesContainer value = 'E' />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <FilteredGamesContainer value = 'F' />
      </TabPanel>
      <TabPanel value={value} index={6}>
      <FilteredGamesContainer value = 'G' />
      </TabPanel>
      <TabPanel value={value} index={7}>
      <FilteredGamesContainer value = 'H' />
      </TabPanel>
      <TabPanel value={value} index={8}>
      <FilteredGamesContainer value = 'I' />
      </TabPanel>
      <TabPanel value={value} index={9}>
      <FilteredGamesContainer value = 'J' />
      </TabPanel>
      <TabPanel value={value} index={10}>
      <FilteredGamesContainer value = 'K' />
      </TabPanel>
      <TabPanel value={value} index={11}>
      <FilteredGamesContainer value = 'L' />
      </TabPanel>
      <TabPanel value={value} index={12}>
      <FilteredGamesContainer value = 'M' />
      </TabPanel>
      <TabPanel value={value} index={13}>
      <FilteredGamesContainer value = 'N' />
      </TabPanel>
      <TabPanel value={value} index={14}>
      <FilteredGamesContainer value = 'O' />
      </TabPanel>
      <TabPanel value={value} index={15}>
      <FilteredGamesContainer value = 'P' />
      </TabPanel>
      <TabPanel value={value} index={16}>
      <FilteredGamesContainer value = 'Q' />
      </TabPanel>
      <TabPanel value={value} index={17}>
      <FilteredGamesContainer value = 'R' />
      </TabPanel>
      <TabPanel value={value} index={18}>
      <FilteredGamesContainer value = 'S' />
      </TabPanel>
      <TabPanel value={value} index={19}>
      <FilteredGamesContainer value = 'T' className={classes.tabs} />
      </TabPanel>
      <TabPanel value={value} index={20}>
      <FilteredGamesContainer value = 'U' />
      </TabPanel>
      <TabPanel value={value} index={21}>
      <FilteredGamesContainer value = 'V' />
      </TabPanel>
      <TabPanel value={value} index={22}>
      <FilteredGamesContainer value = 'W' />
      </TabPanel>
      <TabPanel value={value} index={23}>
      <FilteredGamesContainer value = 'X' />
      </TabPanel>
      <TabPanel value={value} index={24}>
      <FilteredGamesContainer value = 'Y' />
      </TabPanel>
      <TabPanel value={value} index={25}>
      <FilteredGamesContainer value = 'Z' />
      </TabPanel>
    </div>
  );
}