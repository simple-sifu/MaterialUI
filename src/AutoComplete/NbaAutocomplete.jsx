import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { nbaTeams } from './nbaTeams';

const NbaAutocomplete = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  console.log(selectedTeam);
  return (
    <Autocomplete
      id="nba teams"
      options={nbaTeams}
      renderInput={params => (
        <TextField {...params} label="NBA Team" variant="filled" />
      )}
      getOptionLabel={option => option.name}
      style={{ width: 270 }}
      value={selectedTeam}
      onChange={(_event, newTeam) => {
        setSelectedTeam(newTeam);
      }}
    />
  );
};

export default NbaAutocomplete;