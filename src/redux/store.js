import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { newsReducer } from "@/redux/slices/newsSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";


const newsPersistConfig = {
    key: "news",
    storage,
    whitelist: ["newsState"],
};

const rootReducer = combineReducers({
    news: persistReducer(newsPersistConfig, newsReducer),
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store);
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);

