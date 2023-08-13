import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GOOGLE_API_KEY, URL_BASE_GEOCODING } from "../../../constants/maps";

export const mapsApi = createApi({
    reducerPath: 'mapsApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL_BASE_GEOCODING }),
    tagTypes: ['Maps'],
    endpoints: (builder) => ({
        getGeocoding: builder.query({
            query: ({ lat, lng }) => `/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`,
            transformResponse: (response) => {
                if (!response) return [];
                return response?.results?.[0]?.formatted_address;
            },
            transformErrorResponse: (error) => {
                if (!error) return { error: "Ha ocurrido un error en la solicitud de geocodificación." };
                return error?.data?.error?.message;
            },
            providesTags: ['Maps'],
        }),
    }),
});

export const { useLazyGetGeocodingQuery } = mapsApi;
