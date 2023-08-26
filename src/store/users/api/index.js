import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FIREBASE_DATABASE_BASE_URL } from '../../../constants/firebase';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: FIREBASE_DATABASE_BASE_URL }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        saveUserId: builder.mutation({
            query: ({ localId }) => ({
                url: `/users.json`,
                method: 'POST',
                body: { localId },
            }),
            invalidatesTags: ['Users'],
        }),
    }),
});

export const { useSaveUserIdMutation } = usersApi;