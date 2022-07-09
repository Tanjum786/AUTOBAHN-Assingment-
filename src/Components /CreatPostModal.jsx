import {
  Box,
  Button,
  Input,
  Modal,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewpostReducer,
  editPostReducer,
} from "../Redux/Slice/Postslice";
import { v4 as uuidv4 } from "uuid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: [200, 400],
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
export const CreatPostModal = ({
  register,
  handleSubmit,
  reset,
  open,
  handleClose,
  isEdit,
}) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const onSubmit = (data) => {
    if (isEdit) {
      let findindexofpost = posts.findIndex((post) => post.id === isEdit.id);
      dispatch(editPostReducer({ findindexofpost, data }));
      handleClose();
      reset();
    } else {
      data["id"] = uuidv4();
      let newPost = [];
      newPost.push(...posts, data);
      dispatch(createNewpostReducer(newPost));
      reset();
      handleClose();
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography
              variant="h6"
              component="h2"
              style={{ textAlign: "center", fontSize: "1.5rem" }}
            >
              Post your thoughts
            </Typography>
            <Typography variant="h6">Title:</Typography>
            <Input
              style={{ padding: "0.5rem" }}
              type="text"
              placeholder="Mention title"
              {...register("title", { required: true })}
            />
            <TextareaAutosize
              style={{
                resize: "none",
                height: "8rem",
                paddingTop: "1rem",
                width: "100%",
                marginTop: "1rem",
              }}
              type="text"
              placeholder="type your thoughts"
              {...register("body", { required: true })}
            />
            <Button
              variant="contained"
              type="submit"
              style={{
                width: "5rem",
                position: "relative",
                left: "20rem",
                backgroundColor: "#1a237e",
              }}
            >
              Post
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};
