import { Fab, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CreatPost, Postcard } from "./Components ";
import { useDispatch, useSelector } from "react-redux";
import { Allpost } from "./Redux/thunks/PostThunk";

export const Posts = ({
  open,
  handleClose,
  handleOpen,
  register,
  handleSubmit,
  reset,
  setValue,
}) => {
  const [isEdit, setIsedit] = useState(null);

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(Allpost());
  }, []);

  return (
    <>
      <CreatPost
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
        handleClose={handleClose}
        open={open}
        isEdit={isEdit}
        setIsedit={setIsedit}
      />
      <Box>
        {posts.length > 0 ? (
          <Typography variant="h3" p="2rem" textAlign="center">
            All Posts: {posts?.length}
          </Typography>
        ) : (
          ""
        )}
        <Tooltip title="Add post">
          <Fab
            color="primary"
            aria-label="add"
            style={{
              position: "fixed",
              top:"8rem",
              right: "5rem",
              backgroundColor: "#1a237e",
            }}
            onClick={handleOpen}
          >
            <AddCircleIcon />
          </Fab>
        </Tooltip>
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {posts.length === 0 ? (
            <Typography variant="h3" p="2rem" textAlign="center">
              Loading....
            </Typography>
          ) : (
            [...posts]?.reverse().map((item) => {
              return (
                <Postcard
                  item={item}
                  key={item.id}
                  handleOpen={handleOpen}
                  setIsedit={setIsedit}
                  setValue={setValue}
                />
              );
            })
          )}
        </Box>
      </Box>
    </>
  );
};
