import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {
    FIREBASE_AUTH_BASE_URL,
    FIREBASE_AUTH_SIGN_IN_API_URL,
    FIREBASE_AUTH_SIGN_UP_API_URL,
} from '../../../constants/firebase/index';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: FIREBASE_AUTH_BASE_URL }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        signIn: builder.mutation({
            query: (credentials) => ({
                url: FIREBASE_AUTH_SIGN_IN_API_URL,
                method: 'POST',
                body: credentials,
            }),
        }),
        signUp: builder.mutation({
            query: (credentials) => ({
                url: FIREBASE_AUTH_SIGN_UP_API_URL,
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
