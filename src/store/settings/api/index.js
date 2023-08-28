import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BASE_FIREBASE_REALTIME_DATABASE } from '../../../constants/firebase';

export const settingsApi = createApi({
    reducerPath: 'settingsApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE }),
    tagTypes: ['Settings'],
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: ({ localId }) => ({
                url: `/users/${localId}.json`,
                method: 'GET',
            }),
        }),
        updateImageProfile: builder.mutation({
            query: ({ localId, image }) => ({
                url: `/users/${localId}.json`,
                method: 'PATCH',
                body: { profileImage: image },
            })
        }),
        updateAddress: builder.mutation({
            query: ({ localId, address, location }) => ({
                url: `/users/${localId}.json`,
                method: 'PATCH',
                body: { 
                    address,
                    location,
                },
            })
        }),
        updateAccount: builder.mutation({
            query:({ localId, name, surname }) => ({
                url: `/users/${localId}.json`,
                method: 'PATCH',
                body: {
                    name: name,
                    surname: surname
                }
            })
        })
    }),
});

export const { 
    useGetProfileQuery, 
    useUpdateImageProfileMutation, 
    useUpdateDataProfileMutation,
    useUpdateAddressMutation,
    useUpdateAccountMutation, 
} = settingsApi;
