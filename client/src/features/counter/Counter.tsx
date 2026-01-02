import { Button, ButtonGroup, Typography } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";

export default function Counter() {
  const { counterStore} = useStore();
  return (
    <>
      <Observer>
          {() => (
              <>
                  <Typography variant="h4">{counterStore.title}</Typography>
                  <Typography variant="h5">Count: {counterStore.count}</Typography>
              </>
          )}
      </Observer>
      <ButtonGroup sx={{mt: 3}}>
        <Button variant="contained" onClick={() => counterStore.decrement()} color="error">Decrement</Button>
        <Button variant="contained" onClick={() => counterStore.increment()} color="success">Increment</Button>
        <Button variant="contained" onClick={() => counterStore.increment(5)} color="primary">Increment by 5</Button>
      </ButtonGroup>
    </>

  )
}