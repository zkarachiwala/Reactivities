import { Box, Button, ButtonGroup, List, ListItemText, Typography } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore";
import { observer } from "mobx-react-lite";

const Counter = observer(function Counter() {
  const { counterStore} = useStore();
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Box sx={{width: '60%'}}>
        <Typography variant="h4">{counterStore.title}</Typography>
        <Typography variant="h5">Count: {counterStore.count}</Typography>
        <ButtonGroup sx={{mt: 3}}>
          <Button variant="contained" onClick={() => counterStore.decrement()} color="error">Decrement</Button>
          <Button variant="contained" onClick={() => counterStore.increment()} color="success">Increment</Button>
          <Button variant="contained" onClick={() => counterStore.increment(5)} color="primary">Increment by 5</Button>
        </ButtonGroup>
      </Box>
      <Box sx={{width: '40%', p: 4}}>
        <Typography variant="h6">Event Log (Total: {counterStore.eventCount})</Typography>
        <List>
          {counterStore.events.map((event, index) => (
            <ListItemText key={index}>{index+1}: {event}</ListItemText>
          ))}
        </List>
      </Box>
    </Box>
  )
});

export default Counter;