import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { newsReducer } from "@/redux/slices/newsSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { authReducer } from "@/redux/slices/authSlice";
import storage from "@/redux/create-web-storage";


const newsPersistConfig = {
    key: "news",
    storage,
    whitelist: ["newsState"],
};

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["authState"],
};

const rootReducer = combineReducers({
    news: persistReducer(newsPersistConfig, newsReducer),
    auth: persistReducer(authPersistConfig, authReducer),
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store);
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);

