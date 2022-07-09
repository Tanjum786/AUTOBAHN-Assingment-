import { Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deletePostReducer } from "../Redux/Slice/Postslice";

export const Postcard = ({ item, handleOpen, setIsedit, setValue }) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  const deletePostHandler = (postId) => {
    const filterArrywithdeletedPost = posts.filter(
      (item) => item.id !== postId
    );
    dispatch(deletePostReducer(filterArrywithdeletedPost));
  };
  const editPostHandler = (item) => {
    setIsedit(item);
    setValue("title", item.title);
    setValue("body", item.body);
    handleOpen();
  };

  return (
    <Box
      borderRadius="1rem"
      m="1.5rem"
      p="1rem"
      width="50rem"
      bgcolor="#c5cae9"
      key={item.id}
    >
      <Typography fontWeight="bold" padding="0.5rem" fontSize="1.5rem">
        Title: {item.title}
      </Typography>
      <Typography paddingLeft="2rem">{item.body}</Typography>
      <Box display="flex" justifyContent="flex-end" gap="2rem">
        <Tooltip title="edit post">
          <BorderColorSharpIcon
            style={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={() => editPostHandler(item)}
          />
        </Tooltip>
        <Tooltip title="delete post">
          <DeleteIcon
            style={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={() => deletePostHandler(item.id)}
          />
        </Tooltip>
      </Box>
    </Box>
  );
};
