import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const Base_URL = "http://127.0.0.1:8000/";

export const registerUser = createAsyncThunk("auth")