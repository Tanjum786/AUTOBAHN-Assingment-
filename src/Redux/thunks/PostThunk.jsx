import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Allpost = createAsyncThunk("post/getallpost", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = { data: response.data, status: response.status };
    return data
  } catch (error) {
    console.error(error);
  }
});

export { Allpost };
