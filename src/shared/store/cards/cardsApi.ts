import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ICardData {
  id: string;
  name: string;
}

export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/nfts/",
  }),
  endpoints: (builder) => ({
    getCardList: builder.query<ICardData[], void>({
      query: () => "list",
    }),
  }),
});

export const { useGetCardListQuery } = cardsApi;
