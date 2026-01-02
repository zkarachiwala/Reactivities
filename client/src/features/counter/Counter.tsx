import { Button, ButtonGroup, Typography } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore";
import { observer } from "mobx-react-lite";

const Counter = observer(function Counter() {
  const { counterStore} = useStore();
  return (
    <>
      <Typography variant="h4">{counterStore.title}</Typography>
      <Typography variant="h5">Count: {counterStore.count}</Typography>
      <ButtonGroup sx={{mt: 3}}>
        <Button variant="contained" onClick={() => counterStore.decrement()} color="error">Decrement</Button>
        <Button variant="contained" onClick={() => counterStore.increment()} color="success">Increment</Button>
        <Button variant="contained" onClick={() => counterStore.increment(5)} color="primary">Increment by 5</Button>
      </ButtonGroup>
    </>

  )
});

export default Counter;