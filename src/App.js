import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import { CreatPost, NavBar } from "./Components ";
import { Posts } from "./Posts";

function App() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <NavBar />
      <Posts
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
        setValue={setValue}
      />
    </div>
  );
}

export default App;
