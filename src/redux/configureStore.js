import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./books/Books";
import categoryReducer from "./categories/categories";
export default function(){
    return configureStore({
        bookReducer,categoryReducer
    });
}

